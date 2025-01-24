let btn = document.querySelector("button");
btn.addEventListener("click",async () => {
    
    let country = document.querySelector("#text").value;
    console.log(country);
    let college = await getdata(country);
      showname(college)
});

function showname(college) {
    let list = document.querySelector(".result");
    list.innerText = "";
    for(coll of college){
       console.log(coll.name);
       let li = document.createElement("li");
       li.innerText= coll.name;
       list.appendChild(li);
    }
}



let url = 'http://universities.hipolabs.com/search?name='

async function getdata(country) {
    try {
        let res = await axios.get(url+country)
        return(res.data);
    } catch (error) {
        console.log(error);
        return[];
    }
}
getdata();