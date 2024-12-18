import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//create your first component
const ToDoPage = () => {

    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [hover, setHover] = useState(false);

    const addTask = (event) => {
        if (event.key === 'Enter') {
            setList([task, ...list]);
            setTask('');
            console.log(list)
        }
    }


    return (
        <div className="page">
            <h1 className="title">To Do List</h1>
            <input class="form-control py-3 input-bar b-0 my-4" type="text" placeholder="Type your next task..." value={task} onKeyDown={addTask} onChange={(e) => { setTask(e.target.value) }} />
            <div className="task-list">
                <ul class="list-group list-group-flush list-items">

                    {list.map((item, index) => {

                        return (
                            <li className="list-group-item align-middle d-flex justify-content-between" key={index} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}><div className="task">{item}</div> <FontAwesomeIcon icon={faTrash} className={`delete ${hover ? 'delete-show' : ''}`} /></li>
                        )
                    })}
                </ul>
            </div>
            <div className="task-counter">{`${list.length} ${list.length === 1 ? 'item' : 'items'} left`}</div>
        </div>
    );
};

export default ToDoPage;
