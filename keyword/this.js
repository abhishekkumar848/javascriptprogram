let create = function() {
  let  student ={
    name: "Abhishek",
    age: 20,    
    display: function(){
      console.log(`name ${ this.name}  age ${ this.age} `); //
    }

  }
    student.display();
}
create();

function data (){
    name = "Abhishek";
    function subject() {
        english = 90;
        math = 80;
        sst = 70;
        sci = 60;
        hindi = 50;
        function average () {
           let avg =  (this.english + this.math+ this.sst+ this.sci+ this.hindi)/5;
                console.log(`The average of ${name} is = ${avg}`);
        }
        average();
    }
    subject();
    
}
data( );

// Path: keyword/this.js

