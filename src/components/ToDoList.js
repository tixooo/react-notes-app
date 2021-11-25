import {useState} from 'react'
import ToDoListItem from "./ToDoListItem.js"

function ToDoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Clean my room", isDone: false},
        {id: 2, text: "Wash the dishes", isDone: false},
        {id: 3, text: "Go to the gym", isDone: false},
    ])
    const onTodoInputBlur = (e) => {
        //check if we have empty string as input and if we do, do NOT add a note
        if (e.target.value.length > 0) {
            let todo = {
                id: todos.length +1,
                text: e.target.value,
                isDone: false
            }
            setTodos(oldTodos => [
                ...oldTodos,
                todo
            ])}}
        const deleteToDoItemClickHandler = (e, id) => {
           setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id)) 
        }
        const toggleTodoItemClickHandler = (id) => {
            setTodos(oldTodos => {
                return oldTodos.map(todo => 
                    todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
            })}
        return (
            <>
        <ul>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo" />
            {todos.map(todo => 
                <ToDoListItem 
                    key={todo.id} 
                    todo={todo} 
                    onDelete={deleteToDoItemClickHandler}
                    onClick={toggleTodoItemClickHandler}
                />
            )}
        </ul>
        </>
        )}
export default ToDoList