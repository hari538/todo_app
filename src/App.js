import React,{useState, useEffect} from 'react';
import Todo from './Todo.js';
import { Button ,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import  db from './firebase.js';

function App() {
  const [todos,setTodos]= useState([]);
  const [input,setInput]= useState("");

    //code below listens to the database each time and gets the new tasks as they get added or removed
   useEffect(() => {
     db.collection('todos').onSnapshot(snapshot => {
     // console.log('firebase thing is workinng',snapshot.docs.map(doc => doc.data()));  <= this code is  for testing the actual firebase code below  
       setTodos(snapshot.docs.map(doc => doc.data().task))
     })

   },[]);
  const addTodo = (event)=>{
    console.log("working");
    event.preventDefault();// stops the refresh of the input area
    db.collection('todos').add({
      task:input,
      timestamp: Date.now()
    })
    setTodos([...todos,input]);
    setInput(""); //cleans the input  every time
  }
  return (
    <div className="App">
      <h1>hi there </h1>
      <form>
      <FormControl>
        <InputLabel >tasks to be completed</InputLabel>
        <Input value = {input} onChange={event =>setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input}    type="submit" onClick={addTodo} variant="contained" color="primary">
          ADD
      </Button>
     
      <ul>
        {todos.map(todo=> (

          <Todo text={todo}/>
          //<li>{todo}</li>
    
        ))}
        
      </ul>
      </form>
    </div> 
  );
}

export default App;
