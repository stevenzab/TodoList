import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "@/components/todoList";

const Home = () => {
  const [addItems, setAddedItems] = useState([]);

  function addItem(title: string) {
    setAddedItems((prevItems) => {
      return [
        ...prevItems, {title, completed: false, id: crypto.randomUUID()}
      ]
    })
  }

  const toggleItem = (id: string, checked: boolean) => {
    setAddedItems((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: checked
          }
        }
        return item;
      })
    })
  }

  const deleteItem = (id: string) => {
    setAddedItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id)
    })
  }


  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(addItems))
  }, [addItems])

  return (
  <div className="p-5">
    <TodoForm addItems={addItem} />
      <h1 className="text-3xl text-center">Items</h1>
      <TodoList addedItems={addItems} toggleItems={toggleItem} deleteItems={deleteItem}/>
  </div>
  )
}

export default Home; 