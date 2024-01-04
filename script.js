let count=0;
const btn = document.getElementsByClassName("btn");
const toDoCounter = document.getElementById("todoCounter");
btn.addEventListener("click",()=>{
    count++;
    toDoCounter.innerText=`${count}`;

});