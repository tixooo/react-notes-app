import './todoItems.css'
export default function ToDoListItem ({todo, onDelete, onClick}) {
    return <li className={todo.isDone ? 'todo-Item-Done' : ''}>
        {todo.text} 
        <button onClick={()=> onClick(todo.id)}className='blue'>✔</button>
        <button onClick={()=> onDelete(todo.id)} className='red'>␡</button>
        </li>
}