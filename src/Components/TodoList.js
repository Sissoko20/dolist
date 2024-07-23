import React from "react";
import TodoItem from "./TodoItem";



function TodoList({todos, removeTodo, updateTodo }){
    return(
        <div>

           
            <div>
            {todos.map((todo, index)=>(
                <TodoItem key={index} className="todolist"
                index={index} 
                removeTodo={removeTodo}
                todo={todo} 
                updateTodo={updateTodo}
                />
            ))}
</div>
        </div>
    )
}
export default TodoList;