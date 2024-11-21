import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const [, , , scala] = ["python", "java", "c", "scala", "javascript"];
console.log(scala)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App authorized={false}/>
);

