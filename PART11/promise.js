function saveData(data) {
    return new Promise ((succes,fail) => {
        let network = Math.floor(Math.random() * 10) + 1;
        if (network>4) {
            succes("data was connect",data);
        } else {
            fail("there some error");
        }
    })
    
}
// console.log(saveData("ABHISHEK "));

// THEN & CATCH METHOD
saveData("abhishek kumar").then(()=>{
    console.log("complete a data connect")
}).catch(()=>{
    console.log("not connected a data ")
})