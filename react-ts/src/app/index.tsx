import React from "react";
import ReactDOM from 'react-dom/client';
import App from './components/App.js';

const app = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(app);
root.render(<App />);
