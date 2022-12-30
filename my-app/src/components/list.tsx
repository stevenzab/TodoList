import React from "react";

function List() {
  return (
    <div>
        <div className="app__list">
            <div className="app__header">
                <input type="text" placeholder="Enter a task" />
                <input type="number" placeholder="Deadline" />
                <button>Add</button>
            </div>
            <div className="app__todolist">

            </div>
        </div>
    </div>
  );
}

export default List;