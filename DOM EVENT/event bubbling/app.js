const div = document.querySelector('div');
const ul = document.querySelector('ul');
const li = document.querySelector('li');

div.addEventListener("click", function () {
    console.log("div was click");
});
ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was click");

});
li.addEventListener("click", function () {
    event.stopPropagation();
    console.log("li was click");

});