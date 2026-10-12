import Floaters from './Floaters.jsx'

// The first thing they see: no words from your letter, just an invitation to open it.
export default function Landing({ cfg, onOpen }) {
  return (
    <>
      <Floaters />
      <div className="stage">
        <div className="letter" style={{ textAlign: 'center' }}>
          <span className="big-e">💌</span>
          <h2 style={{ fontSize: 30, display: 'block' }}>For {cfg.to}</h2>
          <p className="hand" style={{ background: 'none', marginTop: 8 }}>Something I made, just for you.</p>
          <div className="nav">
            <button className="big" onClick={onOpen}>Open it 🖌️</button>
          </div>
          <p className="hint">Best with sound on 🎵</p>
        </div>
      </div>
    </>
  )
}
