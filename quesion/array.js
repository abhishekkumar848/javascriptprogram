let fruit = [ 'Apple', 'Banana', 'Orange' , 'Mango' , 'Grapes' , 'Pineapple' ];
for (let index = 0; index < fruit.length; index++) {
    console.log(fruit[index]);
    
}
console.log("************");    
// FOR OF LOOP
for (fruits of fruit){
    console.log(fruits);
}
console.log("************"); 
// array loop

let nestedarray = [ ['BMW', 'Audi', 'Mercedes'], [ 'Toyota', 'Honda' ] ];
for (list of nestedarray) {
    for (car of list){
        console.log(car);
    }
    
}