
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
  
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 
let timer = false;
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 
  
function stopWatch() { 
    if (timer==true) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        }    
        document.getElementById('hr').innerHTML = leadingZero(hour); 
        document.getElementById('min').innerHTML = leadingZero(minute); 
        document.getElementById('sec').innerHTML = leadingZero(second); 
        document.getElementById('count').innerHTML = leadingZero(count); 
        setTimeout(stopWatch, 10); 
    } 
}

function leadingZero(time){
    if(time <= 9){
        return "0"+time
    }

    else{
        return time
    }
}

