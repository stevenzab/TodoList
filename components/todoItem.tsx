const TodoItem = ({ id, completed, title, toggleItems, deleteItems }) => {
  return (
    <li key={id}>
    <label>
      <input 
      type="checkbox" 
      checked={completed} 
      onChange={(e) => toggleItems(id, e.target.checked)}
      />
      {title}
    </label>
    <button 
    onClick={() => deleteItems(id)} 
    className="text-red-500 rounded bg-blue-500">Delete</button>
  </li>

  )
}

export default TodoItem;