import React, { useState } from 'react'
import { useTodos } from '../store/todos';

const AddTodo = () => {
    
    const [todo, setTodo] = useState('');
    const {handleAddTodo}=useTodos();

    const handleFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
          if (todo.trim() === '') {
            return; // do nothing if input is empty
          }
        handleAddTodo(todo);
        setTodo('');
    }
    
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} placeholder="Add a new task..."  onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  ) 
}

export default AddTodo