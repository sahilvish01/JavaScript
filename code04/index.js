console.log("JavaScript DOM");

// let btn = document.getElementById("btn1");
// let btn = document.getElementsByClassName("btn_class");

let btn = document.getElementById("btn2").getAttribute("class");

console.log(btn);



let btn1 = document.querySelector("#btn1");

let body = document.querySelector("body");
let count = 0;

btn1.addEventListener("click",() => 
    {
        body.style.backgroundColor = "black"
        count = 1;
    }
);

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => 
    {
        body.style.backgroundColor = "grey"
        count = 0;
    }
);


btn3.addEventListener("click",() => {
    if(count == 0)
    {
      body.style.backgroundColor = "black";
      count=1;
    }
    else
    {
        body.style.backgroundColor = "grey";
        count=0;
    }
});