// Not Define -> Jab declare hi nahi kiye ho 
// Undefined -> Jab declare kiye ho but assign nahi kiye ho 



console.log(5 - "5");       // String ko number mein convert karte hai then minus hota hai 

console.log(undefined + 5); // -> NaN
// Kyuki undefined ko number mein convert nahi kar sakte 

console.log(typeof(typeof(5)));

// 5 ka type -> "number"
// "number" ka type -> string

// console.log(window);
// Js mein window ek global object hota hai


// unsigned -> Jab shadi ka lifafa ho but lifafe mein kuch na ho
                // let a;

// null -> Jab Shadi mein gaye na lifafa mein kuch hai aur na lifafa hai 

// 1. for in loop mein by default Array ka index return karega

// 2. for of loop mein by default array ki values ko return karta hai

let arr = [2,4,5,3,true,"Hello"]

for (const a in arr) {
    
    console.log(a);     // indexes
    
}

for (const a of arr) {
    
    console.log(a);     // values
    

}


// Print numbers of array only
for (const a of arr) 
{  
    if(typeof a == "number")
    {
        console.log(a);
        
    }
}

