// call back hell
let one1 = document.querySelector('.one');
function colorchange(color,delay ,callback) {
    setTimeout( () => {
        one1.style.color= color;
        if (callback) {
            callback();
        }

    },delay);
    
};

colorchange("red" ,1000 ,()=>{

    colorchange("green" ,1000 );

});

//// example two


function saveData(data, connect) {
    let network = Math.floor(Math.random() * 10) + 1;
    if (network > 4) {
        connect();
    } else {
        console.log("Data was not connected.");
    }
}

saveData("abhishek", () => {
    console.log("Data was connected.");
    saveData("thank you", () => {
        console.log("Thank you data was connected.");
    });
});

