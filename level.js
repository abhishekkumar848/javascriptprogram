let car = [ 'BMW', 'Audi', 'Mercedes' ];
car.push('Toyota', 'Honda');
car.pop();
car.shift();
car.unshift('Ferrari'   , 'Lamborghini');

console.log( car ," , index is :" ,car.indexOf('Audi') , car.includes('BMW') , car.includes('Toyota') );
// concat, reverse, slice, splice
let color = [ 'Red', 'Green', 'Blue', 'Yellow' ];
let color2 = [ 'Pink', 'Purple', 'Orange' ];
let color3 = color.concat(color2);
console.log(color3);
let reverse = color3.reverse();
console.log(reverse);
let slice = color.slice(1, 3);
console.log(slice);
let mobile = [ 'Samsung', 'Apple', 'Nokia', 'Sony', 'LG' ];
let splicw = mobile.splice(1, 2 ,'OnePlus', 'Xiaomi');
console.log(splicw, mobile);
// sort
let num = [ 1, 5, 3, 2, 4 ];
let sort = num.sort();
console.log(sort);

let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
let sort2 = days.sort();
console.log(sort2);
//constant array
const fruits = [ 'Apple', 'Banana', 'Orange' ];
const fruit = fruits.push('Mango');
console.log(fruits);
// nested array
let nested = [ 'BMW', 'Audi', 'Mercedes', [ 'Toyota', 'Honda' ] ];
console.log(nested.length);


