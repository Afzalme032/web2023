let textAreaEl = document.querySelector('#msg');
let charCount = document.querySelector('#count');
textAreaEl.addEventListener('keyup',()=>{
    let textLength = textAreaEl.value.length;
    charCount.innerText = textLength;
    if(textLength ===100){
        alert('You already done')
    }
})