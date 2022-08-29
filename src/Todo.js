import React, { useState } from 'react';
import {Button,List,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import './Todo.css';
function Todo(props) {
  return (
  	<List className="todo_list">
  	<ListItem>
  		<ListItemAvatar>
  			
  		</ListItemAvatar>
  		<ListItemText primary="Todo" secondary={props.text} />
  	</ListItem>


  </List>
  	)
}

export default Todo;
