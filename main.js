/* Create toggle bars */


const Toggle_bars= document.getElementById("bars")

Toggle_bars= addEventListener("click",function(){
    Toggle_bars.classList.toggle("fa-xmark")
})

document.querySelectorAll(".FAQ .box-container .box h3").forEach(heading=>{
    heading.onclick= ()=>{
        heading.parentElement.classList.toggle("active")
    }
})