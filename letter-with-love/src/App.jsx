import { useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import Play from './components/Play.jsx'
import { LETTER, THEMES } from './data.js'

export default function App() {
  const [opened, setOpened] = useState(false)

  // apply the chosen palette as CSS variables
  useEffect(() => {
    const theme = THEMES[LETTER.theme] || THEMES['Monet Mist']
    Object.entries(theme).forEach(([k, v]) => document.documentElement.style.setProperty('--' + k, v))
  }, [])

  return opened ? <Play cfg={LETTER} /> : <Landing cfg={LETTER} onOpen={() => setOpened(true)} />
}
