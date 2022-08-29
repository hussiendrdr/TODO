import React, { useState } from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Todo from './Todo';


function App() {
const [todos,setTodos]=useState(['take dogs to walk','take the rubbish out']);
const[input,setInput]=useState('');


const addTodo=(event)=>{
event.preventDefault();
setTodos([...todos,input])
setInput('');
}
  return (
  	<div className="app">
 <from>

<FormControl>
<InputLabel>write a todo </InputLabel>
<Input value={input} onChange={event=>setInput(event.target.value)}   />

</FormControl>
<Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
	ADD TODO

</Button>

  
 </from>	
	
<ul>
	{todos.map((todo)=>(
    <Todo text={todo}/>

		))}
	



</ul>



  	</div>
  	





  	)
}

export default App;
