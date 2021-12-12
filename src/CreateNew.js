import { useState } from 'react'

function CreateNew({appendTodo}) {
  const [opened, setOpened] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function toggle(e) {
    e.preventDefault()
    setOpened(!opened)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    appendTodo(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <form
      onContextMenu={toggle} 
      onSubmit={handleFormSubmit}>
      <hr/>
      <h3>Create new!</h3>
      <div 
        style={{display: opened ? 'flex' : 'none'}}
        className="form-fields">
        <input
          placeholder='Your title...' 
          required value={title} 
          onChange={handleTitle}/>
        <textarea
          placeholder='Your description...' 
          value={description} 
          onChange={handleDescription}></textarea>
        <button>Add</button>
      </div>
    </form>
  )
}

export default CreateNew