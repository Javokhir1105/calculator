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
    // btn1.style.width = "30px"
    // btn1.style.heigth = "40px"
    const natija = (first.value - 0) + (second.value - 0)
    result.textContent = natija
})
btn2.addEventListener("click" , (e) =>{
    e.preventDefault()
    const natija = (first.value - 0) - (second.value - 0)
    result.textContent = natija
})
btn3.addEventListener("click" , (e) =>{
    e.preventDefault()
    const natija = (first.value - 0) * (second.value - 0)
    result.textContent = natija
})
btn4.addEventListener("click" , (e) =>{
    e.preventDefault()
    const natija = (first.value - 0) / (second.value - 0)
    result.textContent = natija
})
btn5.addEventListener("click" , (e) =>{
    e.preventDefault()
    first.textContent = 1;
})