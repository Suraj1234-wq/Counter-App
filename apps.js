 const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const count = document.querySelector("#count");

let counter = 0;

increment.addEventListener("click",() =>{
  counter++;
  count.innerHTML = counter;
});

decrement.addEventListener("click",() =>{
  counter--;
  count.innerHTML = counter;
});

reset.addEventListener("click", ()=>{
  counter = 0;
  count.innerHTML = counter;
});
