let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quiting App");
        break;
    }
    if(req=="list"){
        console.log("--------------");
        for(let i=0;i<todo.length;i++){
            console.log(i+1 ,todo[i]);
        }
        console.log("--------------");
    }else if(req=="add"){
        todo.push(prompt("Enter your task"));
        console.log("Task added");
    }else if(req=="delete"){
        let idx=prompt("Please enter task index for delte");
        todo.splice(idx-1,1);
        console.log("Task deleted");
    }else{
        alert("Provide valid query");
    }
    req=prompt("Please enter your request");
}