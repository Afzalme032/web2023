
function indiaWatch(){
    let options = {timeZone : 'Asia/Kolkata'}
    let currentDate = new Date().toLocaleDateString('en-US',options)
    let currentTime = new Date().toLocaleTimeString('en-US',options)

    document.querySelector('#ind-date').innerText = currentDate 
    document.querySelector('#ind-time').innerText = currentTime
}

setInterval(indiaWatch,1000)

// usa watch

function usaWatch(){
    let options = {timeZone : 'America/New_York'}
    let currentDate = new Date().toLocaleDateString('en-US',options)
    let currentTime = new Date().toLocaleTimeString('en-US',options)

    document.querySelector('#us-date').innerText = currentDate 
    document.querySelector('#us-time').innerText = currentTime
}

setInterval(usaWatch,1000)

// china watch
function chinaWatch(){
    let options = {timeZone : 'Asia/Shanghai'}
    let currentDate = new Date().toLocaleDateString('en-US',options)
    let currentTime = new Date().toLocaleTimeString('en-US',options)

    document.querySelector('#ch-date').innerText = currentDate 
    document.querySelector('#ch-time').innerText = currentTime
}

setInterval(chinaWatch,1000)