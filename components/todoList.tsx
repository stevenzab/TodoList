import React, { useState } from 'react';
import TodoItem from './todoItem';

const TodoList = ({addedItems, toggleItems, deleteItems}) => {
    return (
      <ul className="flex flex-col justify-center items-center">
      {addedItems.map((item) => {
        return (
          <TodoItem 
          id={item.id} 
          completed={item.completed} 
          title={item.title}
          toggleItems={toggleItems}
          deleteItems={deleteItems}
          key={item.id}
          />
        )
      }
      )}
      </ul>
    );
}

export default TodoList