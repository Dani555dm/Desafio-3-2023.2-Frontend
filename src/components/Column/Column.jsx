// src/components/Column/Column.jsx
import React, { useState } from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddTaskForm } from '../AddTaskForm/AddTaskForm';

export const Column = ({ title, status, tasks, onAddTask }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSave = (taskData) => {
    onAddTask(taskData, title); // 'title' é "A Fazer", "Fazendo", "Feito"
    setShowForm(false); 
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      
      <div className="tasks-list">
        {/* Mostra o formulário se showForm for true */}
        {showForm && (
          <AddTaskForm onSave={handleSave} onCancel={handleCancel} />
        )}

        {/* Renderiza os cartões de tarefa */}
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {/* Mostra o botão '+' apenas se o formulário não estiver visível */}
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-task-btn">
          +
        </button>
      )}
    </div>
  );
};