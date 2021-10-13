let rati = document.querySelector(".rati");
let car= document.querySelector(".car");

addEventListener("keypress", function(x){
    if(x.which == 13){
        rati.classList.toggle("moving");
        car.classList.toggle("suspention");
    }
})
//これより上、効かなくなってます。
var btn = document.getElementById("btn");
btn,addEventListener("click",function(click){
    if(click){
        rati.classList.toggle("moving");
        car.classList.toggle("suspention");
    }
})

