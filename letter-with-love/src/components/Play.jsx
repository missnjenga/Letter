import { useEffect, useState } from 'react'
import Floaters from './Floaters.jsx'
import Hand from './Hand.jsx'
import useMusic from '../useMusic.js'
import { SPLASH } from '../data.js'

export default function Play({ cfg }) {
  const [step, setStep] = useState(0)
  const [musicOn, setMusicOn] = useState(true)
  const [skip, setSkip] = useState(false)
  const [splashes, setSplashes] = useState([])
  const music = useMusic()

  const steps = [
    { k: 'intro' },
    ...cfg.story.map((s) => ({ k: 'story', ...s })),
    ...cfg.reasons.map((r) => ({ k: 'why', ...r })),
    { k: 'end' },
  ]
  const s = steps[step]

  // your song lives in public/music/ and is named in src/data.js
  const songUrl = cfg.song ? `${import.meta.env.BASE_URL}music/${cfg.song}` : null

  useEffect(() => {
    if (musicOn) music.start(cfg.mood, songUrl)
    else music.stop()
  }, [musicOn])

  useEffect(() => setSkip(false), [step])

  // tap empty space = a watercolour splash
  const paint = (e) => {
    if (e.target.closest('button,.letter')) return
    const sp = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      size: 90 + Math.random() * 130,
      c: SPLASH[Math.floor(Math.random() * SPLASH.length)],
    }
    setSplashes((a) => [...a.slice(-9), sp])
  }

  const go = (d) => setStep(Math.max(0, Math.min(steps.length - 1, step + d)))
  const stop = (fn) => (e) => {
    e.stopPropagation()
    fn()
  }

  let body
  if (s.k === 'intro') {
    body = (
      <>
        <span className="big-e">💌</span>
        <Hand text={cfg.intro} done={skip} />
      </>
    )
  } else if (s.k === 'story') {
    body = (
      <>
        <h2><span>{s.e}</span>{s.title}</h2>
        <Hand text={s.t} done={skip} />
      </>
    )
  } else if (s.k === 'why') {
    body = (
      <>
        <span className="big-e">{s.e}</span>
        <Hand text={s.t} done={skip} />
      </>
    )
  } else {
    body = (
      <>
        <span className="big-e">🕊️</span>
        <Hand text={cfg.outro} done={skip} />
        <div className="sign">with love, {cfg.from}</div>
      </>
    )
  }

  return (
    <div onClick={paint} style={{ position: 'fixed', inset: 0 }}>
      {splashes.map((p) => (
        <span
          key={p.id}
          className="splash"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.c} 30%, transparent 72%)`,
          }}
        />
      ))}
      <Floaters />

      <div className="top">
        <span />
        <button onClick={() => setMusicOn(!musicOn)}>{musicOn ? '🔊 On' : '🔇 Off'}</button>
      </div>

      <div className="stage">
        <div className="letter" key={step} onClick={() => setSkip(true)}>
          {body}
          <div className="nav">
            {step > 0 && <button onClick={stop(() => go(-1))}>⬅️ Back</button>}
            {step < steps.length - 1 ? (
              <button className="big" onClick={stop(() => go(1))}>Keep reading 💭</button>
            ) : (
              <button className="big" onClick={stop(() => setStep(0))}>Read again 🔁</button>
            )}
          </div>
          <div className="dots">
            {steps.map((_, i) => (
              <span key={i} className={'dot' + (i === step ? ' on' : '')} />
            ))}
          </div>
          <p className="hint" style={{ textAlign: 'center' }}>Tap the empty space to splash some paint 🎨</p>
        </div>
      </div>
    </div>
  )
}
