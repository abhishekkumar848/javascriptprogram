const  student = {
    name : " ABHISHEK ",
    age : 22,
    getinfo : function  ()  {
        setTimeout(()=>{
            console.log(this);
        },4000)
    }
}
console.log(student.getinfo())