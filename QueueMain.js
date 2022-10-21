import Queue from './queue.js';

let QUEUE = new Queue();

let theResult = document.querySelector(".result");
let theButton = document.querySelector(".display");
let insert = document.querySelector(".enqueButton");
let remove = document.querySelector(".dequeButton");


theButton.addEventListener("click", () => {
   theResult.innerHTML =  QUEUE.display();
  
});
insert.addEventListener("click", () => {
   let adding =document.querySelector(".insertValue").value;
   theResult.innerHTML = adding + ". Added To The System Queue";
  QUEUE.enqueue(adding);
});
remove.addEventListener("click", () => {
   theResult.innerHTML =
   QUEUE.dequeue() + ". Removed ";
});