// Group students by grade: A (≥80), B (60–79), C (below 60). Input: [{name:'Arya',marks:85}, {name:'Ravi',marks:60}, {name:'Priya',marks:45}, {name:'Sam',marks:91}, {name:'Tanya',marks:73}]


let arr = [{name:'Arya',marks:85}, {name:'Ravi',marks:60}, {name:'Priya',marks:45}, {name:'Sam',marks:91}, {name:'Tanya',marks:73}];


let result = arr.reduce((acc, val) => 
             {
                if(val.marks >= 80)
                {
                    acc['A'].push(val.name);
                }
                else if(val.marks >= 60)
                {
                    acc['B'].push(val.name); 
                }
                else
                {
                    acc['C'].push(val.name)
                }

                return acc;
             }
,{A : [], B : [], C : []})


console.log(result);
