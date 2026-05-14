// Auto Photo Swapper

let img = document.querySelector("img") 

let arr = [

    'https://images.pexels.com/photos/12904168/pexels-photo-12904168.jpeg',
    "https://images.pexels.com/photos/37510829/pexels-photo-37510829/free-photo-of-contemplative-view-of-swiss-alps-in-winter.jpeg",
    "https://images.pexels.com/photos/17791451/pexels-photo-17791451/free-photo-of-cup-of-coffee-on-a-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/37569961/pexels-photo-37569961.jpeg"

]

console.log("Hello")

let num = 0;

setInterval(() => 
{
    img.setAttribute("src", arr[num]);

    num = (num +1 )%arr.length;
}, 1000)