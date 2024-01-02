
let list = document.getElementsByClassName('list')
let listItems = document.getElementsByClassName('list-items')

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click',function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active',"");
        this.className += ' active'  // space is compulsory
    })
}