let toggler = document.getElementsByClassName('arrow');
let i;
//console.log(toggler.length)
for(i = 0 ; i < toggler.length; i++){
    toggler[i].addEventListener('click',function(){
        console.log(this.parentElement)
         this.parentElement.querySelector('.more').classList.toggle('show');
         this.classList.toggle('arrowDown')
    })
}