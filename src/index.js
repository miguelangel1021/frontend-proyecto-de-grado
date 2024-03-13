import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './rutas';
import DSVisualizer from './ds-vizualizer';
import LinkedList from './LinkedList';
import './ds-visualizer.css';

ReactDOM.render(
  <React.StrictMode>
    <LinkedList />
  </React.StrictMode>,
  document.getElementById('root')
);
