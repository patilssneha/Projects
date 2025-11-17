import {useState} from "react";

function Todo(){
    const [tasks] = useState([]);
    const [newTasks,setNewTask] = useState("");

    const addTask=()=>{
        if(newTasks.trim()==="") return;
        setNewTask([...tasks,newTasks]);
        setNewTask("")
    };

    return(
        <div> 
        <input type="text"
         placeholder ="Enter you task"
          value={newTasks}
           onChange={(e) => setNewTask(e.target.value)}>
            </input><button onClick={addTask}>Add</button>
            <ul>
            {tasks.map((tasks, index) => (
                <li key={index}>{tasks}</li>
            ))}
        </ul>
            </div>
    );}
    export default Todo;
