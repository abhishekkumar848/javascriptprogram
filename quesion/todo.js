let todo = [];
let req = prompt("What would you like to do?");
while (true){
    if (req == "quit") {
        console.log("You quit the app");
        break;
        
    }
    if (req == "list"){
        console.log("-----------------");
        for( let i =0 ; i < todo.length; i++){
            console.log(i,task[i]);
        }
        console.log("-----------------");
    }

    else if (req == "new"){
        let task = prompt("Enter new task");
        todo.push(task, todo);
        console.log("Task added");
    }
    else if (req == "delete"){
        let index = prompt("Enter index of task to delete");
        todo.splice(index, 1);
        console.log("Task deleted");

    }
    
    req = prompt("What would you like to do?");
    
}

