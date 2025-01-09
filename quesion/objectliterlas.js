const student = {
    name: 'John',
    age: 23,
    marks: 80,
    address : "New York"

}
console.log(student  );

// item is key and value is value
 const item = {
        name: 'pen',
        price: 10,
        quantity: 2,
        color: ['red', 'blue', 'green'],
        address: {
            city: 'New York',
            country: 'USA'
        },
        pic1 : 'pen.jpg',
 }

 // add / update
    item.price = 20;
    // add new property
    item.quantity = 3;
    console.log(item);
 // nested object
 const classinfo = {
        student: {
            name: 'John',
            age: 23,
            marks: 80,
            address : "New York"
        },
        teacher: {
            name: 'Mike',
            age: 30,
            marks: 90,
            address : "New York"
        }
 };
    console.log(classinfo);
    // ARRAY IN OBJECT
    const studentinfo = [
        {
            name: 'John',
            age: 23,
            marks: 80,
            address : "New York"
        },
        {
            name: 'Mike',
            age: 30,
            marks: 90,
            address : "New York"
        }
    ]
    console.log(studentinfo);
    // MATH OBJECT
    console.log(Math.PI);
    console.log(Math.round(4.7));
    console.log(Math.floor(4.7));
    console.log(Math.ceil(4.3));
    console.log(Math.sqrt(225));
    console.log(Math.abs(-4.7));
    console.log(Math.pow(2, 3));
    console.log(Math.min(0, 150, 30, 20, -8, -200));
    console.log(Math.max(0, 150, 30, 20, -8, -200));
    console.log(Math.random(5));
    console.log(Math.random() * 10);
    console.log(Math.floor(Math.random() * 10));

