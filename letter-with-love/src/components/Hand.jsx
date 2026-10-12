import { useEffect, useState } from 'react'

// Words fade in one by one, like the letter is being written.
// Set done={true} to show everything immediately.
export default function Hand({ text, done }) {
  const words = text.split(/(\s+)/)
  const [n, setN] = useState(0)

  useEffect(() => {
    setN(0)
    const t = setInterval(
      () =>
        setN((v) => {
          if (v >= words.length) {
            clearInterval(t)
            return v
          }
          return v + 2
        }),
      70
    )
    return () => clearInterval(t)
  }, [text])

  const all = done || n >= words.length
  return (
    <p className="hand">
      {words.map((w, i) => (
        <span key={i} style={{ opacity: all || i < n ? 1 : 0 }}>
          {w}
        </span>
      ))}
    </p>
  )
}
