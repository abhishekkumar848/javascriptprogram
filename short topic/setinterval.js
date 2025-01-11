const intervalId = setInterval(() => {
    console.log("hello my name is abhishek");
}, 5000);

// To stop the interval after some time, for example, after 15 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 15000);