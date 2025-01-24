// CALL MY FIRST API FOR USING FETCH             https://catfact.ninja/fact 

let url = 'https://randomuser.me/api/';            //   https://randomuser.me/api/       
// https://dog.ceo/api/breeds/image/random
fetch(url).then((result)=>{
   
    return result.json()
}).then((data)=>{
    console.log(" This is a email -- ",data.results[0].email );
    return fetch(url)
})
.then((result)=>{
    
    return result.json()
}).then((data)=>{
    console.log(" This is a  -- ", data.results[0].gender );
    return fetch(url)
})
.catch((err)=>{
 console.log(err)
})
//---------------------------------------------------
//-------using await and async function or essay 
let caturl = 'https://catfact.ninja/fact'; 
async function getdata() {
  try{
    let req = await fetch(caturl);
    let data = await req.json();
    console.log("CAT DATA IS-----------",data.fact)

  }catch{
        console.log("there not access a api ")
  }
  
}

getdata();