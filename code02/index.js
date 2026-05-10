// includes()
// find()
// forEach()
// map()
// filter()
// reduce()

let arr = [2,3,5,2,4];


// 1. includes():      -> true/false

let includeD1 = arr.includes(5);
 
console.log(includeD1);         // true




//2. find():          -> value return karta hai agar found ho jati hai to

let findD1 = arr.find(a => a == 5 );

console.log(findD1);    // 5


let findD2 = arr.find(a => a == 10 );

console.log(findD2);        // Undefined


//3. forEach():               // forEach function return nahi karta


// forEach = forin() + forof()

/*let forEachD1 =*/ arr.forEach((val, ind, ref) => 
                    {
                        console.log("Index: ",ind);
                        // return ind;
                    }
)


arr.forEach((val, ind, ref) => console.log("Value: ",val))


arr.forEach((val, ind, ref) => console.log("Referance: ", ref))

// 4. map():                // map function se return kar sakta hai, map ka return type array hota hai

let mapD1 = arr.map((val, ind, ref) => 
            {
                return val;
            }
)

console.log(mapD1);


let mapD2 = arr.map((val, ind, ref) => 
            {
                return ind;
            }
)

console.log(mapD2);

let mapD3 = arr.map((val, ind, ref) => 
            {
                return ref;
            }
)

console.log(mapD3);         // Array of array



// 5. filter():             // filter karke values return karega        return type : array 

let filterD1 =  arr.filter((val, ind, ref) => 
                {
                    return val>2;
                }
)

console.log(filterD1);


let filterD2 =  arr.filter((val, ind, ref) => 
                {
                    return ref;
                }
)

console.log(filterD2);



// 6. reduce():                 // return karta hai but only single value

let reduceD1 =  arr.reduce((acc, val, ind, ref) => 
                {

                    return acc; 

                }
)

console.log(reduceD1);          // by default acc = first value & val = second value

// Now, accumlator ko value paas karenge

let reduceD2 =   arr.reduce((acc, val, ind, ref) => 
                {
                    return acc;
                },10)


console.log(reduceD2);          // acc ko jo value pass karenge voh uss value se initiallize ho jayega and b = first value se initialize hoga




let reduceArr1 = arr.reduce((a,b,c,d) => {
    
    return b;
    
})
// Jab b return karayenge to voh ek ek karke reduceArr1 ko value return karta jayega and at the end voh sabse last value ko return kar dega

console.log(reduceArr1);