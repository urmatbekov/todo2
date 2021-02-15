import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    return (
        <ul className="list-group mt-2">
            <TodoItem>Read Book</TodoItem>
            <TodoItem>Cook</TodoItem>
            <TodoItem>Sleep</TodoItem>
            <TodoItem></TodoItem>
        </ul>
    );
};

export default TodoList;
