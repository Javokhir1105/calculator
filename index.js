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
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const result = document.querySelector(".natija");

btn1.addEventListener("click" , (e) =>{
    e.preventDefault()
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