import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

const date = new Date();
const todos = [
    {   id: uuidv4(),
        title: "Revising Japanese",
        createdAt: date
    },
    {
        id: uuidv4(), 
        title: "Revising React",
        createdAt: date
    },
    {
        id: uuidv4(),
        title: "Withdrawl of courses",
        createdAt: date
    }
    ]
    

const ToDoList = (props) => {
    const [list, setList] = useState(todos);
    const [newItemTitle, setNewItemTitle] = useState('');

    const handleDeletion = (i) => {
        let newList = [];
        //using list instead of todos
        list.forEach(function(todo, index){
            if (todo.id!==i){
                newList.push(todo);
            }
        })
        console.log(i);
        setList(newList);
    }

    let newTask = React.createRef();

    const handleAdding = () => {
        // let newItem = {title: newTask.current.value, createdAt: new Date()};
        let newItem = {id: uuidv4(), title: newItemTitle, createdAt: new Date()};
        let newList = [...list, newItem]
        setList(newList);

         
    }

    const handleChange = (e) =>{
        setNewItemTitle(e.target.value);
    }

    
    return(
        <div>{
            list.map((todo, index) => {
                return(<div className="task" key={index}>
                    <p>{todo.title}</p>
                    <button className="deleteBtn" onClick={(e) => handleDeletion(todo.id)}>Delete</button>
                    </div>)
            })   
        }

            <input ref={newTask} placeholder="New Task" onChange={handleChange} maxLength={50}/>

                
            <button className="addBtn" onClick={(e) => handleAdding()}>Add</button>
    
        
        </div>
    )
}

export default ToDoList;