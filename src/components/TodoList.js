import React from "react";
import { Todo } from "./todo";

export const Todolist = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
             <ul className="todo-list">
                {
                    filteredTodos.map((todo)=> (
                        <Todo todo ={todo} todos = {todos} setTodos = {setTodos} key={todo.id} text ={todo.text} />
                    ))
                }   
             </ul>
        </div>
    );
};

