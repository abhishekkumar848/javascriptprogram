//create a function
let btn2 = document.querySelector(".dog");
btn2.addEventListener("click",async () => {
    let dogimg = await getdogimage();
    let img = document.querySelector("#image");
    img.setAttribute("src",dogimg);

})

// dog api call image 
let dogurl = 'https://dog.ceo/api/breeds/image/random';
async function getdogimage() {
    try{
      let res = await axios.get(dogurl);
      return(res.data.message);
    }catch(err){
        return("image now found");
    }
}
getdogimage();





/// cat fact genrate
let btn = document.querySelector(".cat");
btn.addEventListener("click",async ()=>{
    /// cat fact genrate
    let fact = await getfact()
    let p = document.querySelector(".result");
    p.innerText = fact;
    console.log()
})
/// axios get  call 
let url = 'https://catfact.ninja/fact';
async function getfact(){
    try{
        let req = await axios.get(url);
        return(req.data.fact);

    }catch (err){
        return("there are some error " , err)
    }
}
getfact();