import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.synced = false;
window.timers = [];
window.olMap = null;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);