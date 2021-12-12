import { useState } from 'react'

function TodoElement({todo, remove, edit}) {
  const [opened, setOpened] = useState(false)
  const [editing, setEditing] = useState(false)

  const [newTitle, setNewTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  function setEdited() {
    edit(todo.id, {...todo, title: newTitle, description})
  }

  function toggle(e) {
    e.preventDefault()
    if(editing) toggleEditing()
    setOpened(!opened)
  }

  function toggleDone() {
    edit(todo.id, {...todo, isDone: !todo.isDone})
  }

  function toggleEditing() {
    if(editing) setEdited()
    setEditing(!editing)
  }

  return (
    <li
      className={todo.isDone ? "green" : "red"} 
      onContextMenu={toggle}>
      
      {editing
      ? <input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
      : <h4>{todo.title || 'Untitled'} {todo.isDone ? '(Done!)' : ''}</h4>
      }

      {opened
      ? (<>
        <small>{todo.timestamp}</small>

        {editing
        ? <textarea 
          value={description} 
          onChange={e => setDescription(e.target.value)}></textarea>
        : <p>{todo.description || 'No description'}</p>
        }
        <div>
          <button onClick={() => remove(todo.id)}>Remove</button>
          <button onClick={toggleEditing}>Toggle edit</button>
          <button onClick={toggleDone}>
            {todo.isDone ? 'Undo' : 'Done!'}
          </button>
        </div>
      </>) : ( <></> )}
    </li>
  )
}

export default TodoElement