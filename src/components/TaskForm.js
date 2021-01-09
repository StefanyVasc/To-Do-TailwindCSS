import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';
const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext,
  );
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Add Task..."
          value={title}
          onChange={handleChange}
          required
          className="px-5 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
      </div>

      <div className="mb-6 flex justify-center space-x-5">
        <button
          type="submit"
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 "
        >
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button
          className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
          onClick={clearList}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
