// src/App.jsx
import React from 'react';
import { KanbanBoard } from './components/KanbanBoard/KanbanBoard';

function App() {
  return (
    <div className="kanban-board-container">
      <KanbanBoard />
    </div>
  );
}

export default App;