const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsuis = document.getElementById("toCelsuis");
const result = document.getElementById("result");

let temp;

function convert(){
    if(toFarenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "*F";
    } 
    else if (toCelsuis.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) *(5/9);
        result.textContent = temp + "*C";
    }
    else {
        result.textContent = "Select a Unit"
    }
}