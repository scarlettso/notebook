import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';
import axios from 'axios';

const date = new Date();
// const apiHost = 'http://localhost:5000';
const apiHost = '';

const ToDoList = (props) => {
    const [list, setList] = useState([]);
    const [newItemTitle, setNewItemTitle] = useState('');

    const handleRefresh = () => {
        axios.get(apiHost+"/api/tasks").then(response => {
            console.log(response)

            setList(response.data)
        });
    }
    useEffect(()=>{
        handleRefresh();
        
        return()=>{
            console.log('bye')
        }
    }, []);

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

        axios.post(apiHost+"/api/tasks", newItem).then(response =>{
            console.log(response.data)
            let newList = [...list, response.data]
            setList(newList);

            // handleRefresh();
        })
        

         
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