console.log(this);

let name = "Sahil";     // let and const variable memory mein ek alag block mein safe rakhe jaate hai, isliye global object ki name property nahi bante 
                        // isliye this.name se access bhi nahi hote

let obj1 =              // Object lexical scope create nahi karta means agar ye parent child scoping ko allow nahi karta , agat isme arrow function use karo to ye vaha se access karega jaha object khud decalre hai
{

    name: "Keshav",

    getName : () =>
    {
        console.log(this.name);     // undefined because object lexical scope allow nahi karta and global mein name let se declare hai
    }
}

obj1.getName();     // undefined