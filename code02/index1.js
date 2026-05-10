// Given [3, 7, 2, 9, 1, 5, 8], use filter() to keep numbers greater than 5, then use map() to square each of those numbers.

// Expected output: [49, 81, 64] 

let arr = [3, 7, 2, 9, 1, 5, 8];


let auxresult = arr.filter((val, ind, ref) => 
                {
                    return val > 5;
                }
)

let result= auxresult.map((val, ind, ref) =>
            {
                return val*val;
            }
)

console.log(result);
