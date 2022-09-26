// const newLi = document.createElement("li")
// const coffeeText = document.createTextNode("Coffee")
// newLi.appendChild(coffeeText)
// document.querySelector("ul").appendChild(newLi)
$(document).ready(()=>{
    $("ul").on("focus", (event)=>{
        console.log(event)
    })
    $("ul").addClass("grocery-list")
})