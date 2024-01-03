let input = document.getElementById('value');
let btn = document.querySelectorAll('button')
let screenValues = ""

    for(let i = 0 ; i < btn.length; i++){
        btn[i].addEventListener('click',(e)=>{
            let enteredNumber = e.target.innerHTML
            //console.log(enteredNumber)
            if(enteredNumber=='AC'){
                input.value = ""
            } else if(enteredNumber == 'C'){
                input.value= input.value.toString().slice(0,-1)
            } else if(enteredNumber == '='){
                input.value = eval(screenValues)
            } else{
              screenValues+= enteredNumber
              input.value = screenValues
            }
          
        })
    }
   
