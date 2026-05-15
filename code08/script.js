// Javascript Promises

let p = new Promise((res, rej) => 
{
    // res();

    rej();
})

p.then(()=> 
{
    console.log("Resolved");
    
}).catch(() => {
    console.log("Rejected");
    
})


function step1()
{
    return new Promise((res, rej) => {

        setTimeout(() => {
        console.log("Selected..");
        res();       
        }, 5000)

    })
}


function step2()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Filter added");
            res();
        }, 4000)

    })
}


function step3()
{
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Caption added");
            res();
        }, 2000)

    })
}

step1().then(()=> {
    step2().then(()=>{
        step3();
    })
})
