import { Delete, Edit } from '@styled-icons/material-outlined';
import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="flex justify-between items-center my-4 border-b border-purple-50  border-opacity-30 border-dashed ">
      <span className="text-lg  font-medium">{task.title} </span>
      <div className="ml-8">
        <button
          className="w-6 bg-red-500 mx-2 rounded"
          onClick={() => removeTask(task.id)}
        >
          <Delete />
        </button>
        <button
          className="w-6 bg-green-500 rounded"
          onClick={() => findItem(task.id)}
        >
          <Edit />
        </button>
      </div>
    </li>
  );
};

export default Task;
