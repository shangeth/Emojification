document.getElementById('input').addEventListener("keyup", realtimefunc);

var input = document.getElementById('input');

function realtimefunc(){
    document.getElementById('output').value = input.value;
}