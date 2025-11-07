// src/components/TaskCard/TaskCard.jsx
import React from 'react';
// Para os ícones, instale: npm install react-icons
import { FaUserCircle, FaCalendarAlt } from 'react-icons/fa';

export const TaskCard = ({ task }) => {
  
  // Mapeia o status para uma classe CSS
  const statusClass = {
    'A Fazer': 'status-todo',
    'Fazendo': 'status-doing',
    'Feito': 'status-done',
  }[task.status];

  return (
    <div className={`task-card ${statusClass}`}>
      <h3>{task.title}</h3>
      
      <div className="task-info">
        <span>
          <FaUserCircle /> {task.responsible}
        </span>
      </div>
      
      <div className="task-info">
        <span>
          <FaCalendarAlt /> {task.dueDate}
        </span>
      </div>

      <p>{task.description}</p>
    </div>
  );
};