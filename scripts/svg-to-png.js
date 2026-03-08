const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'img');
// 2x resolución para pantallas retina (220*2, 76*2)
const W = 440, H = 152;
const scale = 0.77;
const w = Math.round(W * scale), h = Math.round(H * scale);
const left = Math.round((W - w) / 2), top = Math.round((H - h) / 2);

sharp(path.join(imgDir, 'btn-apple.svg'))
  .resize(w, h)
  .png()
  .toBuffer()
  .then((buf) => {
    return sharp({
      create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
    })
      .composite([{ input: buf, left, top }])
      .png()
      .toFile(path.join(imgDir, 'btn-apple.png'));
  })
  .then(() => console.log('btn-apple.png created 440x152 (2x)'))
  .catch((err) => { console.error(err); process.exit(1); });
