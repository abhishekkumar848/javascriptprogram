let urldata = 'https://icanhazdadjoke.com/';
async function getdata() {
    try {
        const head = {headers : {Accept : "application/json"}}
        let res = await axios.get(urldata,head);
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}
getdata();