import { useState } from 'react'
import { FLOAT } from '../data.js'

// Emojis drift upward. Tap one to pop it.
export default function Floaters() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      e: FLOAT[i % FLOAT.length],
      left: Math.random() * 92,
      size: 22 + Math.random() * 24,
      dur: 14 + Math.random() * 14,
      delay: -Math.random() * 22,
      pop: false,
    }))
  )

  const pop = (id) => {
    setItems((a) => a.map((x) => (x.id === id ? { ...x, pop: true } : x)))
    setTimeout(
      () => setItems((a) => a.map((x) => (x.id === id ? { ...x, pop: false, left: Math.random() * 92 } : x))),
      450
    )
  }

  return items.map((x) => (
    <span
      key={x.id}
      className={'float' + (x.pop ? ' pop' : '')}
      onClick={(e) => {
        e.stopPropagation()
        pop(x.id)
      }}
      style={{ left: x.left + '%', fontSize: x.size, animationDuration: x.dur + 's', animationDelay: x.delay + 's' }}
    >
      {x.e}
    </span>
  ))
}
