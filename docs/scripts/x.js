document.oncontextmenu = document.body.oncontextmenu = () => false;

const q = document.getElementById('m');
const w = q.getContext('2d');

q.width = window.innerWidth;
q.height = window.innerHeight;

let e = ' ';
for (let r = 0; r < 45; r++) {
  e += String.fromCharCode(r + 65393);
}
e = e.split('');

const t = Array(Math.floor(q.width / 16))
  .fill()
  .map(() => Math.floor(Math.random() * -q.height / 16));

let frameCount = 0;
const frameDelay = 5;

function y() {
  if (++frameCount % frameDelay === 0) {
    w.fillStyle = 'rgba(0,0,0,0.05)';
    w.fillRect(0, 0, q.width, q.height);
    w.fillStyle = '#0f0';
    w.font = '16px Arial';

    t.forEach((u, i) => {
      w.fillText(e[Math.floor(Math.random() * e.length)], i * 16, u * 16);
      t[i] =
        u * 16 > q.height && Math.random() > 0.975
          ? Math.floor(Math.random() * -q.height / 16)
          : u + 1;
    });
  }

  window.requestAnimationFrame(y);
}

y();
