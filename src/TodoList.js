import TodoElement from './TodoElement'
import CreateNew from './CreateNew'
import { useFromStorage } from './lib'

function TodoList() {
  const [todos, setTodos] = useFromStorage('__todos', [])

  function appendTodo(title, description) {
    const todo = {
      id: Date.now(),
      timestamp: new Date().toDateString(),
      title,
      description,
      isDone: false
    }
    setTodos(prev => [...prev, todo])
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  function editTodo(id, newTodo) {
    setTodos(prev => prev.map(todo => todo.id === id 
      ? newTodo : todo))
  }

  return (
    <div>
      <header>
        <h1>Todo List!</h1>
      </header>

      <div className="container">
        <ul>
        {todos.map(todo => (
          <TodoElement 
            key={todo.id} 
            todo={todo}
            remove={removeTodo}
            edit={editTodo}/>
        ))}
        </ul>
        <CreateNew appendTodo={appendTodo}/>
      </div>
    </div>
  )
}

export default TodoList