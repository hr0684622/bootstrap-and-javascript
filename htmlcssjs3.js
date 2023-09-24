const number1 = document.getElementById("i1");
const number2 = document.getElementById("i2")
const btnmultiply = document.getElementById("multiply")
const btndivide = document.getElementById("divide")
const result1 = document.getElementById("result")

function calculatemultiply() {
    const numbervalue1 = number1.value;
    const numbervalue2 = number2.value;
    const totalmultiply = numbervalue1 * numbervalue2;
    result1.innerText = totalmultiply;
}
function calculatedivide(){
    const numbervalue1 = number1.value;
    const numbervalue2 = number2.value;
    const totaldivide = numbervalue1 / numbervalue2;
    result1.innerText=totaldivide;
}





btnmultiply.addEventListener("click", calculatemultiply);
btndivide.addEventListener("click", calculatedivide);