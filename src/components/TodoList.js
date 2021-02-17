import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    state = {
        todoList: [
            { name: "Read Book2", important: true },
            { name: "Cook2", important: false },
            { name: "Sleep2", important: true },
            { name: "Play2", important: false }
        ]
    }

    changeImportant = (name) => () => {
        console.log('this change ' + name)
    }


    render() {
        return (
            <ul className="list-group mt-2">
                {this.state.todoList.map((todo) => {
                    return (
                        <TodoItem changeImportant={this.changeImportant(todo.name)} important={todo.important}>
                            {todo.name}
                        </TodoItem>
                    )
                })}
            </ul>
        );
    }
};


export default TodoList;
