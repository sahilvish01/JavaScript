// Given products [{name:'Pen',price:20,inStock:true}, {name:'Book',price:150,inStock:false}, {name:'Bag',price:500,inStock:true}], filter only in-stock items, apply 10% discount, get the total price.

// Expected output: 468 ((20×0.9) + (500×0.9))

let arr = [{name:'Pen',price:20,inStock:true}, {name:'Book',price:150,inStock:false}, {name:'Bag',price:500,inStock:true}];

let inStock =   arr.filter((val) => 
                {
                    return val.inStock == true;
                }
)

let sum =   inStock.reduce((acc, val) =>
            {
                return acc + val.price;
            }
,0)



// Applying 10% Discount:
let FinalPrice = sum - (10 * (sum/100));

console.log(FinalPrice);