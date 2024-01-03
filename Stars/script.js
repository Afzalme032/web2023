
const rateStars = (()=>{
    let a = document.getElementById('star')
   // console.log(a)
    a.innerHTML = "&#xf006;";
    a.style.color = "black";
    a.style.fontSize = "40px";

    setTimeout(()=>{
        a.innerHTML = "&#xf123;";
        a.style.color = "red"
        a.style.fontSize = "50px";
    },1000)

    setTimeout(()=>{
        a.innerHTML = "&#xf005;";
        a.style.color = "orange"
        a.style.fontSize = "60px";
    },2000)
});
rateStars();
setInterval(rateStars,3000)
