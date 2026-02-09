function $(sel){return document.querySelector(sel)}
const surprise = $('#surprise')
const message = $('#message')
const reveal = $('#reveal')

surprise.addEventListener('click',()=>{
  launchHearts(18)
})

message.addEventListener('click',()=>{
  reveal.classList.toggle('show')
})

function launchHearts(count=12){
  for(let i=0;i<count;i++){
    const h=document.createElement('div')
    h.className='float-heart'
    const size=8+Math.random()*22
    h.style.width=size+'px'
    h.style.height=size+'px'
    h.style.left=(Math.random()*100)+'%'
    h.style.top='-20px'
    h.style.background='radial-gradient(circle at 30% 30%, #fff6, #ff6b81)'
    h.style.borderRadius='50% 50% 50% 50% / 60% 60% 40% 40%'
    h.style.transform='rotate('+ (Math.random()*360) +'deg)'
    h.style.opacity='0.95'
    document.body.appendChild(h)
    const duration=3+Math.random()*3
    h.animate([
      {transform:`translateY(0) scale(1)`, opacity:1},
      {transform:`translateY(${window.innerHeight+100}px) scale(.6)`, opacity:0}
    ],{duration:duration*1000, easing:'ease-out'})
    setTimeout(()=>h.remove(), (duration*1000)+200)
  }
}

// Accessibility: keyboard support
document.addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    if(document.activeElement===surprise) surprise.click()
    if(document.activeElement===message) message.click()
  }
})

// RSVP handlers
const yes = $('#yes')
const no = $('#no')
const card = document.querySelector('.card')
const heart = document.querySelector('.heart')
const response = $('#response')

if(yes){
  yes.addEventListener('click', ()=>{
    response.textContent = "❤ Chop rice my sister"; response.classList.add('show')
    card.classList.add('celebrate')
    heart.classList.add('fast')
    launchHearts(40)
    createConfetti(30)
    setTimeout(()=>{ card.classList.remove('celebrate'); heart.classList.remove('fast') }, 3200)
  })
}

if(no){
  no.addEventListener('click', ()=>{
    response.textContent = "Maua hutaki"; response.classList.add('show')
    card.classList.add('shake')
    setTimeout(()=> card.classList.remove('shake'), 700)
  })
}

function createConfetti(count=20){
  const colors = ['#ff6b81','#ffd166','#9ad3bc','#ff9aa2','#c7ceea']
  for(let i=0;i<count;i++){
    const c = document.createElement('div')
    c.className='confetti'
    const size = 6 + Math.random()*10
    c.style.width = size+'px'
    c.style.height = size+'px'
    c.style.left = (Math.random()*100)+'%'
    c.style.top = '-20px'
    c.style.background = colors[Math.floor(Math.random()*colors.length)]
    c.style.opacity = '0.95'
    document.body.appendChild(c)
    const dur = 2000 + Math.random()*2000
    c.animate([
      {transform:`translateY(0) rotate(0deg)`, opacity:1},
      {transform:`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720-360}deg)`, opacity:0}
    ],{duration:dur, easing:'cubic-bezier(.2,.8,.2,1)'} )
    setTimeout(()=> c.remove(), dur+200)
  }
}
