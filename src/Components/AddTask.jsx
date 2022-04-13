import React from "react";
import Button from "./Button";
import './AddTask.css';

const AddTask = () => {
    return ( 
        <div className="addTask_container">
            <input type="text" className="inputTask" />
            <Button>Add</Button>
        </div>
    );
}
 
export default AddTask;