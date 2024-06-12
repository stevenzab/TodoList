import React, { useState } from 'react';

const TodoList = ({addedItems, toggleItems, deleteItems}) => {
    return (
      <ul className="flex flex-col justify-center items-center">
      {addedItems.map((item, index) => (
        <li key={item.id}>
          <label>
            <input 
            type="checkbox" 
            checked={addedItems.completed} 
            onChange={(e) => toggleItems(item.id, e.target.checked)}
            />
            {item.title}
          </label>
          <button 
          onClick={() => deleteItems(item.id)} 
          className="text-red-500 rounded bg-blue-500">Delete</button>
        </li>
      ))}
      </ul>
    );
}

export default TodoList