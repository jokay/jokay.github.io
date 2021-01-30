document.oncontextmenu = document.body.oncontextmenu = function () {
  return false
}

const m = document.getElementById('m')
const b = m.getContext('2d')
m.height = window.innerHeight
m.width = window.innerWidth

let s = ' '
for (let i = 0; i < 45; i++) {
  s += String.fromCharCode(i + 65393)
}

s = s.split('')
const d = []
for (let i = 0; i < m.width / 16; i++) {
  d[i] = m.height
}

function x () {
  b.fillStyle = 'rgba(0, 0, 0, 0.05)'
  b.fillRect(0, 0, m.width, m.height)
  b.fillStyle = '#0f0'
  b.font = '16px Arial'
  for (let i = 0; i < d.length; i++) {
    b.fillText(s[Math.floor(Math.random() * s.length)], i * 16, d[i] * 16)
    d[i] = d[i] * 16 > m.height && Math.random() > 0.975 ? 0 : d[i] + 1
  }
}

setInterval(x, 90)
