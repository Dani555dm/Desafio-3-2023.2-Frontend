// src/components/KanbanBoard/KanbanBoard.jsx
import React, { useState } from 'react';
import { Column } from '../Column/Column';

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]); // Inicia vazio

  const handleAddTask = (taskData, columnStatus) => {
    const newTask = {
      id: Date.now(),
      ...taskData, // title, description, responsible, dueDate
      status: columnStatus // 'A Fazer', 'Fazendo' ou 'Feito'
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Filtra as tarefas para cada coluna
  const todoTasks = tasks.filter(task => task.status === 'A Fazer');
  const doingTasks = tasks.filter(task => task.status === 'Fazendo');
  const doneTasks = tasks.filter(task => task.status === 'Feito');

  return (
    <div className="kanban-board">
      <Column
        title="A Fazer"
        status="todo"
        tasks={todoTasks}
        onAddTask={handleAddTask}
      />
      <Column
        title="Fazendo"
        status="doing"
        tasks={doingTasks}
        onAddTask={handleAddTask}
      />
      <Column
        title="Feito"
        status="done"
        tasks={doneTasks}
        onAddTask={handleAddTask}
      />
    </div>
  );
};