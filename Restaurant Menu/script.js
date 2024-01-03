

const menuItems = [
    {
        id:1,
        item : 'Food item 1',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-1.jpg",
        foodName : 'Food 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    },
    {
        id:2,
        item : 'Food item 2',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-2.jpg",
        foodName : 'Food 2',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    },

    {
        id:3,
        item : 'Food item 3',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-3.jpg",
        foodName : 'Food 3',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    },
    {
        id:4,
        item : 'Food item 4',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-4.jpg",
        foodName : 'Food 4',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    },

    {
        id:5,
        item : 'Food item 5',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-5.jpg",
        foodName : 'Food 5',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    },

    {
        id:6,
        item : 'Food item 6',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque.',
        img : "./Images/food-image-6.jpg",
        foodName : 'Food 6',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptas voluptates aperiam nulla error quis iste, quidem'
    }
]

let title = document.getElementById('title')
let text = document.getElementById('text')
let img = document.getElementById('img')
let food = document.getElementById('food')
let desc = document.getElementById('desc')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let random = document.getElementById('random')

let currentMenu = 0;

window.addEventListener('DOMContentLoaded',function(){
    // let menu = menuItems[currentMenu]
    // title.textContent = menu.item;
    // text.textContent = menu.text;
    // img.src = menu.img;
    // food.textContent = menu.foodName;
    // desc.textContent = menu.desc
    allMenu(currentMenu)

})

//console.log(menuItems.length)
const allMenu = ()=>{
    let menu = menuItems[currentMenu]
    title.textContent = menu.item;
    text.textContent = menu.text;
    img.src = menu.img;
    food.textContent = menu.foodName;
    desc.textContent = menu.desc
}

random.addEventListener('click',()=>{
     currentMenu = Math.floor(Math.random()*menuItems.length);
    allMenu(currentMenu)
})

prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu < 0){
        currentMenu = menuItems.length-1
    }
    allMenu(currentMenu)
})

next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu > menuItems.length-1){
        currentMenu = 0
    }
    allMenu(currentMenu)
})