import React from 'react';
import './Todo.css';

import {List, ListItem,ListItemText,ListItemAvatar,Avatar,ImageIcon,Button} from "@material-ui/core";
import db from './firebase';
function Todo(props) {

    return (
        <List className="todoList">
            <ListItem>
                <ListItemAvatar>
                  
                </ListItemAvatar>
            
                <ListItemText primary={props.todo.todo} secondary="pending tasks"/>
            
            </ListItem>
            <Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>✅ finished ?</Button>
        </List>
    )
}

export default Todo
