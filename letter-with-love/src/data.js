// ============ EDIT ME: this file holds everything personal ============
// Edit the text below, save, and the site updates. Nobody sees it but you.

export const LETTER = {
  to: 'Gichuki',
  from: 'Me',
  theme: 'Sunset Meadow', // Monet Mist | Rothko Dusk | Matisse Garden | Starry Night
  song: '', // your own music: put the file in public/music/ and write its name here, e.g. 'our-song.mp3'
  mood: 'Gentle', // only used when song is empty: Gentle | Hopeful | Wistful
  intro:
    "Gichuki,\n\nI've started this letter more times than I can count. I wanted to write it the way you taught me to look at things: slowly, with patience, and with colour. So I made you this. Please read it to the end, and know that every word comes from a place of love.",
  story: [
    {
      e: '🎨',
      title: 'How it began',
      t: "Do you remember the Days? We used to talk I stood or sat or walked next to you, pretending to look and listen while really looking at you. I think that was the day I started falling for the way you see the world.And just how your mind interpret things just perfect no flaws to it. Those first months felt like fresh paint: bright, a little messy, and full of everything we hadn't made yet.",
    },
     
    {
      e: '🖌️',
      title: 'When the colours began to shift',
      t: "Somewhere along the way our days stopped feeling like a shared canvas and started feeling like two people painting on opposite walls. I told myself it was just a busy season. I talked about it I waited. I hoped. We had a few quiet days where we both knew something was different and neither of us wanted to say it out loud. I kept thinking that if I just tried harder, the picture would come back.",
    },
    {
      e: '🌙',
      title: 'How it went',
      t: " I fell in love and not just surface level deep that I felt if I ended this it would hurt and part of myself would be lost, but im slowly losing myself in a battle of you can't end it cause he loves you and have the perfect future planned out he is what you need in life, hence been questioning myself do I fit in in your life? Im I bringing any additional value innit? obvious answer is obviously no, Tried twice but its aint working out and realised you'll never know me past surface level Mary and I just cant be open with you, Im sorry.I know that we are in building individual level right now so this might just come out just off but it just have to ",
    },
    {
      e: '🌙',
      title: 'The night I understood',
      t: "It was the days, we talked about everything except us. I sat alone with my thoughts and realised I wasn't unhappy because of anything you did. We had simply become two different humans, wanting to make different pictures with our lives. Staying will mean slowly fading both our colours. And you deserve every one of yours.",
    },
  ],
  reasons: [
    {
      e: '🌧️',
      t: "We want different things, and neither of us is wrong. You light up when you talk about the future you're painting, and honestly, I can't see myself in the frame the way I used to. I'd rather tell you that gently now than let you discover it years from now.",
    },
    {
      e: '🕰️',
      t: "The timing was never quite right. We kept waiting for a calmer season to fix things, and it never came. I don't want to keep you waiting for someone who isn't sure.",
    },
    {
      e: '🌱',
      t: "I need room to grow, and so do you. Real growth needs space and honest light, and I think we've both been shrinking a little to fit inside something that stopped fitting.",
    },
  ],
  outro:
    "Thank you for the galleries, the sketchbooks left open on the table, the paint under your fingernails, and every patient hour you spent teaching me to look closer. None of it is wasted. It's part of me now. I hope you keep painting, keep noticing the light in the corners, and find someone who sees all of it exactly the way you deserve. I'll always be rooting for you.",
}

// Painter-inspired palettes. Add your own!
export const THEMES = {
  'Sunset Meadow': { bg: '#f6dcc8', card: '#fff7ef', ink: '#4a3040', accent: '#e8955f', soft: '#f1cdb5', w1: '#f2a7a0', w2: '#a7cfa0' },
  'Monet Mist': { bg: '#dfe9ec', card: '#f7fafb', ink: '#34495a', accent: '#8fb3c4', soft: '#c3d6dd', w1: '#c9bfe0', w2: '#b9dccf' },
  'Rothko Dusk': { bg: '#ecd9d2', card: '#fbf3ef', ink: '#5a3340', accent: '#c98a8a', soft: '#e8c8c0', w1: '#e8b79a', w2: '#d9a0b3' },
  'Matisse Garden': { bg: '#e0ebd9', card: '#f7faf1', ink: '#2e4a3a', accent: '#7fae8b', soft: '#c5dcc2', w1: '#f0d9a0', w2: '#a9d3c6' },
  'Starry Night': { bg: '#1f2d4a', card: '#2b3b62', ink: '#f4e8bd', accent: '#e3b95a', soft: '#42578a', w1: '#3f6aa8', w2: '#6a58a8' },
}

export const FLOAT = ['🎨', '🖌️', '🖼️', '🌻', '🌙', '☁️', '🦋', '✨']
export const SPLASH = ['var(--w1)', 'var(--accent)', 'var(--w2)', 'var(--soft)']

// root = MIDI note, sc = scale steps, gap = ms between notes
export const MOODS = {
  Gentle: { root: 60, sc: [0, 2, 4, 7, 9, 12], gap: 1100 },
  Hopeful: { root: 62, sc: [0, 2, 4, 7, 9, 12, 14], gap: 800 },
  Wistful: { root: 57, sc: [0, 3, 5, 7, 10, 12], gap: 1400 },
}
