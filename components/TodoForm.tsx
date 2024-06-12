import React from "react";
import { useState } from "react";


const TodoForm = ({addItems}) => {

  const [items, setItems] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addItems(items);
    setItems("");
  }
  return (
  <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
    <label className="m-5">Item:

    </label>
    <input 
      type="text"
      name="name"
      value={items}
      onChange={(e) => setItems(e.target.value)}
      className="bg-indigo-500 p-3 rounded"
      />
      <button className="text-black text-center bg-white rounded w-1/6 mt-5">
        Add
      </button>
  </form>
  )
}

export default TodoForm;