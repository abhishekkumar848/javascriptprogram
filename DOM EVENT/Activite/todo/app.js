
const ol  = document.querySelector('ol');
const btn  = document.querySelector("button");
const inp  = document.querySelector('input');


btn.addEventListener('click', function () {
    //create a new li add 
  let li =  document.createElement("li"); 
  li.innerText = inp.value ;
  ol.appendChild(li);
   //create a new button add 
  let delbtn =  document.createElement("button");
  delbtn.innerText ="❌" ;
  li.appendChild(delbtn);
  // delete  remove ol to li 
  delbtn.addEventListener("click", function () {
    ol.removeChild(li);
  })
 
  inp.value = "";
});