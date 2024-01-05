
let destTime = new Date(" jan 7, 2024 10:00:00").getTime()
 let x = setInterval(()=>{
  let curDate = new Date().getTime()
  let diff = destTime - curDate;
  let day = Math.floor(diff / (1000*60*60*24));
  let hr = Math.floor(diff % (1000*60*60*24)/(1000*60*60))
  let min = Math.floor(diff % (1000*60*60)/(1000*60))
  let sec = Math.floor(diff % (1000*60)/(1000))

  document.getElementById('day').innerHTML = `${day} day`
  document.getElementById('hr').innerHTML = `${hr} hr`
  document.getElementById('min').innerHTML = `${min} min`
  document.getElementById('sec').innerHTML = `${sec} sec`

  if(diff < 0){
    clearInterval(x)
    document.getElementById('day').innerHTML = '00'
    document.getElementById('hr').innerHTML = '00'
    document.getElementById('min').innerHTML = '00'
    document.getElementById('sec').innerHTML = '00'
  }
},1000)