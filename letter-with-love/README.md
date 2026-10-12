# A letter, with love 🖌️

A one-person, handwritten-style letter site built with React + Vite.
The first screen only says "For <name>" and an Open button, so nothing is spoiled.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
```

## Make it yours (everything is in src/data.js)
- `to` / `from`: their name and yours
- `intro`, `story`, `reasons`, `outro`: your words (add or remove items freely)
- `theme`: Monet Mist, Rothko Dusk, Matisse Garden or Starry Night

## Add your own music
1. Copy the song from your downloads (mp3, m4a or wav) into `public/music/`
2. In `src/data.js` set `song: 'your-file-name.mp3'` (exact name, including the extension)

If `song` is empty or the file can't be found, a soft generated melody plays instead.
The music starts when they press "Open it" (browsers need a tap before playing sound).

## Share it
```bash
npm run build      # creates dist/
```
Upload the `dist/` folder to Netlify Drop, Vercel or GitHub Pages and send them the link.
Your song file is bundled inside dist/music/.

## Files
```
src/data.js            your content, palettes, music setting
src/App.jsx            landing, then the letter
src/components/        Landing, Play (the letter), Hand (handwriting effect), Floaters
src/useMusic.js        plays your song, or the generated melody
src/styles.css         watercolour backgrounds, lined paper, handwriting
public/music/          drop your song here
```
