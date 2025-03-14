import React, { useState } from 'react';
import Modal from './Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="content">
      <h1>Vanilla TS with Rsbuild</h1>
      
      <button 
        className="btn btn-primary" 
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Welcome"
      >
        <p>This is a reusable modal component!</p>
        <p>You can add any content here.</p>
      </Modal>
    </div>
  );
};

export default App; 