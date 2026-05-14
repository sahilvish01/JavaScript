// Callback Hell


// setTimeout(() => {
//     console.log("C");
    
// },10);

// setTimeout(() => {
//     console.log("B");
    
// }, 0)

// console.log("A");


function step1(fn)
{
    setTimeout(()=>{
        console.log("Selected");
        fn();
    },5000)
    
}

function step2(fn)
{
    setTimeout(() => {
        console.log("Filter added");
        fn()
    }, 4000)
}

function step3(fn) 
{
    setTimeout(() => 
    {
        console.log("Caption Added");
        fn();
    }, 2000
    )
    
}

function step4() 
{
    setTimeout(() => 
    {
        console.log("Posted");

    }, 1000)    
}


step1(() => {
    step2(() => {
        step3(() => {
            step4();
        })
    })
})

