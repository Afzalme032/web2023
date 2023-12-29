let form = document.getElementById('addForm');
let inputEl = document.getElementById('inputField')
let listItem = document.getElementById('list');
form.addEventListener('submit', myFunction);
function myFunction(e) {
    e.preventDefault();
    if (inputEl.value.trim() == "") {
        alert('Please enter your item ')
    } else {
        let li = document.createElement('li');
        li.className = "list-group-item"
        li.innerHTML = inputEl.value;
        inputEl.value = ""
        let btn = document.createElement('button')
        btn.className = "btn btn-danger btn-sm float-end"
        btn.innerHTML = "X"
        li.appendChild(btn);
        listItem.appendChild(li)

    }
}
listItem.addEventListener('click', (e) => {
    //console.log(e.target)
    if (e.target.classList.contains('btn')) {
        //console.log(e.target)
        let li = e.target.parentElement;
        console.log(li)
        listItem.removeChild(li)


    }
})
