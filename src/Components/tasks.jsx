import React from "react";
import Item from "./taskItem";

const Tasks = ({ tasks }) =>{
    return (
        <>
            {tasks.map((task) => (<Item task = {task}/>))}
        </>
    )
};

export default Tasks;