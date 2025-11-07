// src/components/AddTaskForm/AddTaskForm.jsx
import React, { useState } from 'react';

export const AddTaskForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [responsible, setResponsible] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (!title || !responsible || !dueDate) {
      alert('Título, Responsável e Prazo são obrigatórios!');
      return;
    }
    
    // Converte a data para o formato dd/mm/YYYY se for do tipo 'date'
    const formattedDate = new Date(dueDate + 'T00:00:00')
                           .toLocaleDateString('pt-BR');

    onSave({ title, description, responsible, dueDate: formattedDate });
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Responsável"
        value={responsible}
        onChange={(e) => setResponsible(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date" // O input tipo 'date' facilita a seleção
        placeholder="Prazo (dd/mm/YYYY)"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      
      <div className="form-actions">
        <button onClick={onCancel} className="cancel-btn">X</button>
        <button onClick={handleSubmit} className="save-btn">✔️</button>
      </div>
    </div>
  );
};