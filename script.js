let input = document.getElementById("input");
let btn = document.getElementById("btn");
let error = document.getElementById("show-error");
console.log(btn);

btn.addEventListener("click", function(){
    if(input.value === ""){
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        error.innerText = "Input field is empty";
        input.style.backgroundImage = "url('images/icon-error.svg')";
        input.style.backgroundRepeat = "no-repeat";
        input.style.backgroundPosition = "80%";
    }
    else if(input.value.indexOf("@") === -1){
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        error.innerText = "Please provide a valid email";
        input.style.backgroundImage = "url('images/icon-error.svg')";
    }
    else{
        input.value = "";
        input.style.background = "none";
        input.style.border = "none";
        error.innerText = "";
    }
})