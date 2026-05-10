// Given students [{name:'Arya',marks:85}, {name:'Ravi',marks:60}, {name:'Priya',marks:72}, {name:'Sam',marks:91}], use reduce() to calculate the average marks.


let arr = [{name:'Arya',marks:85}, {name:'Ravi',marks:60}, {name:'Priya',marks:72}, {name:'Sam',marks:91}];


// Ham jo bhi value return karenge uss value se accumlator fir se initiallize ho jayega
let sum = arr.reduce((acc, val, ind, ref) => 
            {
                return (acc + val.marks); 
            }
,0)

let average = sum/4;

console.log(average);