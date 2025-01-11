// let odd = function (n){
//     console.log(!(n%2==0));
// }
// let even = function (n){
//     console.log(n%2==0);
// }
function oddoreven(request) {
    if (request == 'odd') {
        let odd = function (n){
            console.log(!(n%2==0));
        }
        
    }
    else if (request =="even"){
        let even = function (n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Invalid Request");
    }
}
let request = "odd";

let result = console.log(oddoreven(request ));
result(5); 

