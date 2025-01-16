let form = document.querySelector("form");
// h1.addEventListener("formdata", function () {
//     console.log("form submit")
// })
// extrating form data ................
 form.addEventListener('submit',function (event) {
    event.preventDefault();
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');
      console.log(`username : ${user.value}`);
      console.log(`password : ${pass.value}`);
      
 })

