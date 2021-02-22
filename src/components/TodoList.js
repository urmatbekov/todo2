import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    state = {
        todoList: [
            {id:1, name: "Read Book2", important: true },
            {id:4, name: "Cook2", important: false },
            {id:7, name: "Sleep2", important: true },
            {id:9, name: "Play2", important: false }
        ]
    }

    changeImportant = (name) => () => {
        console.log('this change ' + name)
    }

    deleteItem = (id) => () => {
        const filtered = this.state.todoList.filter((todo)=>todo.id !== id)
        this.setState({
            todoList:filtered
        })
    }


    render() {
        return (
            <ul className="list-group mt-2">
                {this.state.todoList.map((todo) => {
                    return (
                        <TodoItem 
                        key={todo.id}
                        deleteItem={this.deleteItem(todo.id)} 
                        changeImportant={this.changeImportant(todo.name)} 
                        important={todo.important}>
                            {todo.name}
                        </TodoItem>
                    )
                })}
            </ul>
        );
    }
};


export default TodoList;
