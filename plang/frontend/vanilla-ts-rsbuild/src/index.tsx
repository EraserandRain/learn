import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="content">
      <h1>React with Rsbuild</h1>
      <p>Start building amazing things with React and Rsbuild.</p>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 