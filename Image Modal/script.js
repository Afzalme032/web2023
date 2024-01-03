

let logo = document.getElementById('logo')
let bulbImage = document.getElementById('bulbImage')
let close = document.getElementById('close')
let desc = document.getElementById('desc')
let container = document.querySelector('.container')

logo.addEventListener('click',()=>{
    container.style.display = "block"
    desc.innerHTML = "Our Services"
    bulbImage.src = 'bulbImage.jpg'
})

close.addEventListener('click',()=>{
    container.style.display = "none"
})