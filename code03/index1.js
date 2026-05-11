// Closure:

//  Agar kisi Outer function se inner function ka referance return karo to inner function mein jitne outer ke variables use huye hai sabki live referance hold karke return karta hai 



// Agar kisi Outer function ke andar koi inner function banaya 
// Aur inner function ko return kara diya 
// To inner function ke andar jitne bhi outer ke local variables use ho rahe the voh uska live referance hold karke return karta hai 
// Jisse Outer function destroy hone ke baad bhi uske jo local variables inner mein use huye hai
// Unhe update ya modify kar sakte hai

//IMP: This Live referance is known as Lexical Pointer

function Outer()
{
    let name = "Sahil";

    function inner()
    {
        console.log(name);        
    }

    return inner;
}


let fn = Outer();

fn();       // Output: Sahil


function Outer1()
{
    let name = "Sahil";

    function inner1()
    {
        console.log(name);        
    }

    name = "Keshav";
    return inner1;
}


let fn1 = Outer1();

fn1();       // Output: Keshav