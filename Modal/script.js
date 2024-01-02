let check = document.getElementById('check')
let close = document.getElementById('close')
let yes = document.getElementById('yes')
let cancel = document.getElementById('cancel')
let open = document.getElementById('open')
// open
check.addEventListener('click',()=>{
    open.style.display = "block"
})

//close
close.addEventListener('click',()=>{
    open.style.display = "none"
})

//yes
yes.addEventListener('click',()=>{
    open.style.display = "none"
})
//cancel

cancel.addEventListener('click',()=>{
    open.style.display = "none"
})