// const box2 = document.querySelector(".container");
// box2.addEventListener("click" , (event) =>{
//   box2.style.color = "red"
//   box2.style.fontSize = "30px"
//   box2.textContent = "hello world"
// })

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
const btn13 = document.querySelector(".btn13");
const btn14 = document.querySelector(".btn14");
const btn15 = document.querySelector(".btn15");
const btn16 = document.querySelector(".btn16");
const first = document.querySelector(".input");

btn1.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += "+";
})
btn2.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '-';
})
btn3.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '*';
})
btn4.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '/';
})
btn5.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '1';
})
btn6.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '2';
})
btn7.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '3';
})
btn8.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '4';
})
btn9.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '5';
})
btn10.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '6';
})
btn11.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '7';
})
btn12.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '8';
})
btn13.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '9';
})
btn14.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value += '0';
})
btn16.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.value = " ";
})
btn15.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(first.value);
    first.value = eval(first.value);
});