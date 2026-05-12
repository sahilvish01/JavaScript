let inp1 = document.querySelector("#inp1");

let h1 = document.querySelector("h1");

let btn = document.querySelector("button")

// inp1.addEventListener("input", (e) => 
// {
//     h1.innerText = e.target.value;
// })


btn.addEventListener("click", () => {
        
    h1.innerText += inp1.value;
    inp1.value = "";
    
})