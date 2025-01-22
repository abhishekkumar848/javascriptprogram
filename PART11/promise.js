function saveData(data) {
    return new Promise ((succes,fail) => {
        let network = Math.floor(Math.random() * 10) + 1;
        if (network>4) {
            succes("data was connect ........... ",data);
        } else {
            fail("there some error..............");
        }
    })
    
}
// console.log(saveData("ABHISHEK "));

// THEN & CATCH METHOD............
// saveData("abhishek kumar").then(()=>{
//     console.log("complete a data connect")
// }).catch(()=>{
//     console.log("not connected a data ")
// })

// improved virsion.................
saveData("abhishek kumar").then((result)=>{
    console.log("data 1 connect")
    console.log(result)
    return saveData("aman prajapati");
}).then((result)=>{
    console.log("data 2 connect")
    console.log(result)
    return saveData("anmol");
})
.then((result)=>{
    console.log("data 3 connect")
    console.log(result)
    
})
.catch((error)=>{
    console.log("not connected a data ")
    console.log(error)
})