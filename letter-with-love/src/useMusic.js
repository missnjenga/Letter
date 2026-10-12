import { useEffect, useRef } from 'react'
import { MOODS } from './data.js'

const midi = (m) => 440 * Math.pow(2, (m - 69) / 12)

// Plays your own song if songUrl is given. If there is no song (or the file
// can't be found) it falls back to a soft melody generated in the browser.
export default function useMusic() {
  const ref = useRef(null)

  const stop = () => {
    const s = ref.current
    if (!s) return
    clearInterval(s.t)
    try {
      s.master.gain.linearRampToValueAtTime(0, s.ctx.currentTime + 1)
      setTimeout(() => s.ctx.close(), 1200)
    } catch (e) {}
    if (s.audio) {
      try { s.audio.pause() } catch (e) {}
    }
    ref.current = null
  }

  const melody = (mood) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const master = ctx.createGain()
      master.gain.value = 0
      master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2)
      const delay = ctx.createDelay()
      delay.delayTime.value = 0.42
      const fb = ctx.createGain()
      fb.gain.value = 0.45
      delay.connect(fb)
      fb.connect(delay)
      master.connect(ctx.destination)
      master.connect(delay)
      delay.connect(ctx.destination)

      const { root, sc, gap } = MOODS[mood] || MOODS.Gentle
      const tone = (f, type, vol, attack, dur) => {
        const o = ctx.createOscillator()
        const g = ctx.createGain()
        const n = ctx.currentTime
        o.type = type
        o.frequency.value = f
        g.gain.setValueAtTime(0, n)
        g.gain.linearRampToValueAtTime(vol, n + attack)
        g.gain.exponentialRampToValueAtTime(0.0001, n + dur)
        o.connect(g)
        g.connect(master)
        o.start(n)
        o.stop(n + dur + 0.1)
      }
      let i = 0
      let last = 0
      const tick = () => {
        if (i % 8 === 0) [0, 7, 16].forEach((x) => tone(midi(root - 12 + x), 'sine', 0.12, 1.5, 6))
        if (Math.random() < 0.78) {
          last = Math.max(0, Math.min(sc.length - 1, last + Math.floor(Math.random() * 5) - 2))
          tone(midi(root + sc[last] - (Math.random() < 0.25 ? 12 : 0)), 'triangle', 0.16, 0.03, 2.6)
        }
        i++
      }
      tick()
      ref.current = { ctx, master, t: setInterval(tick, gap) }
    } catch (e) {
      console.error(e)
    }
  }

  const start = (mood, songUrl) => {
    stop()
    if (!songUrl) return melody(mood)
    const a = new Audio(songUrl)
    a.loop = true
    a.volume = 0.7
    ref.current = { t: 0, audio: a }
    const fallback = () => { stop(); melody(mood) }
    a.addEventListener('error', fallback)
    a.play().catch(fallback)
  }

  useEffect(() => stop, [])
  return { start, stop }
}
