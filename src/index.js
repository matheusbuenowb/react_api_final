import React from 'react';
import ReactDOM from 'react-dom/client'; // altere o caminho de importação
import App from './App';

// Crie o root usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use o método render do root para renderizar o componente
root.render(<App />);
