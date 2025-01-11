function print(funn , n) {   // high order function
    for (let i = 1; i <= n; i++) {
        funn(i);
        
    }
} 
let name = function () { // callback function
    console.log("Abhishek");
}
print(name, 10);// 10 times print name