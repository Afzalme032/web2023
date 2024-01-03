let text = document.querySelector('.container');
text.addEventListener('click',function(){
    if(text.innerHTML ==="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo voluptate enim qui odit reprehenderit amet numquam dicta similique alias!"){
        text.innerHTML = " Done reading !!! "
       // console.log(text.innerHTML)
    } else{
        text.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo voluptate enim qui odit reprehenderit amet numquam dicta similique alias!"
    }
   
})