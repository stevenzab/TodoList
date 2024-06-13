const TodoItem = ({ id, completed, title, toggleItems, deleteItems }:
  { id: number, completed: boolean, title: string,
    toggleItems: (id: number, checked: boolean) => void,
    deleteItems: (id: number) => void }) => {
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