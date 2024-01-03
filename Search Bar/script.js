function searchItems(){
    let input = document.getElementById('search').value;
    //console.log(input)
    input = input.toLowerCase();

    let item = document.getElementsByClassName('fruits');

    for(let i = 0; i < item.length; i++){
        if(!item[i].innerHTML.toLowerCase().includes(input)){
            item[i].style.display = "none";
        } else{
            item[i].style.display = "list-item"
        }
    }

}