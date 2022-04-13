import React from "react";
import "./Task.css";

const Item = ({task}) => {
    return <div className="task_container">{task.title}</div>;
};
 
export default Item;