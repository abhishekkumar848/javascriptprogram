// async key word 

async function greet() {
    return "hello";

}console.log(greet())

// await keyword

let one = document.querySelector(".one");
function colorchange(color,delay) {
    return new Promise((result,reject)=>{
        setTimeout(()=>{
            one.style.color= color;
            result("color change ")
        },delay)
    })
}
async function demo() {
   await colorchange("#2ECC71",1000);
   await colorchange("#3498DB",1000);
   await colorchange("#16A085",1000);
   await colorchange("#E67E22",1000);
   await colorchange("#F1C40F",1000);
};
 console.log(demo());

