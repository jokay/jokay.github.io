document.oncontextmenu = document.body.oncontextmenu = function () {
  return false
}

const a = document.getElementById('a')
const b = a.getContext('2d')
a.height = window.innerHeight
a.width = window.innerWidth

let symbols = ' '
for (let i = 0; i < 45; i++) {
  symbols += String.fromCharCode(i + 65393)
}

symbols = symbols.split('')
const fontSize = 16
const columns = a.width / fontSize
const drops = []
for (let i = 0; i < columns; i++) {
  // drops[i] = 1
  drops[i] = a.height
}

function draw () {
  b.fillStyle = 'rgba(0, 0, 0, 0.05)'
  b.fillRect(0, 0, a.width, a.height)
  b.fillStyle = '#0f0'
  b.font = fontSize + 'px Arial'
  for (let i = 0; i < drops.length; i++) {
    const c = symbols[Math.floor(Math.random() * symbols.length)]
    b.fillText(c, i * fontSize, drops[i] * fontSize)
    if (drops[i] * fontSize > a.height && Math.random() > 0.975) {
      drops[i] = 0
    }
    drops[i]++
  }
}

setInterval(draw, 90)
