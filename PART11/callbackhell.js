// // call back hell
// let one1 = document.querySelector('.one');
// function colorchange(color,delay ,callback) {
//     setTimeout( () => {
//         one1.style.color= color;
//         if (callback) {
//             callback();
//         }

//     },delay);
    
// };

// colorchange("red" ,1000 ,()=>{

//     colorchange("green" ,1000 );

// });

// //// example two


// function saveData(data, connect) {
//     let network = Math.floor(Math.random() * 10) + 1;
//     if (network > 4) {
//         connect();
//     } else {
//         console.log("Data was not connected.");
//     }
// }

// saveData("abhishek", () => {
//     console.log("Data was connected.");
//     saveData("thank you", () => {
//         console.log("Thank you data was connected.");
//     });
// });

 //.............................
 // using promise color change
 let one1 = document.querySelector('.one');
function colorchange(color,delay ,callback) {
    return new Promise ((result,reject)=>{
        setTimeout( () => {
            one1.style.color= color;
            result("change color............")
    
        },delay);
    })
    
    
};

colorchange("red" , 1000).then((result)=>{
    console.log("done for function work")
    console.log(result)
    return colorchange("#2ECC71" , 1000)
}).then((result)=>{
    console.log("done for function work")
    console.log(result)
    return colorchange("#3498DB" , 1000)
})
.then((result)=>{
    console.log("done for function work")
    console.log(result)
    return colorchange("#16A085" , 1000)
}).then((result)=>{
    console.log("done for function work")
    console.log(result)
    return colorchange("#E67E22" , 1000)
}).then((result)=>{
    console.log("done for function work")
    console.log(result)
    return colorchange("#F1C40F" , 1000)
})
.catch((error)=>{
    console.log("done for function work")
    
})