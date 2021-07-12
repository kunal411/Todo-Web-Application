const del = document.getElementById('delete');
var boxes = document.querySelectorAll('.form-check-input');
var checkboxes = [];

checked_list = [];
del.addEventListener('click', function(){
    for(let i of boxes){
        if(i.checked)
            checkboxes.push(i);
    }
    checkboxes.forEach((checkbox) => {
        checked_list.push(checkbox.value);
    });
});