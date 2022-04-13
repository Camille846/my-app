import React from "react";
import Button from "./Button";
import './AddTask.css';

const AddTask = () => {
    return ( 
        <div className="addTask_container">
            <h1>Minhas Tarefas</h1>
            <div className="input_container">
            <input type="text" className="inputTask" />
            <Button>Adicionar tarefa</Button>
            </div>
        </div>
    );
}
 
export default AddTask;