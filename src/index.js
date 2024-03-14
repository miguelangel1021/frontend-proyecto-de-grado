import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DSVisualizer from './ds-vizualizer';
import { Routes, Route } from 'react-router-dom';
import LinkedList from './LinkedList';
import './ds-visualizer.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DSVisualizer />} />
        <Route path="/LinkedList" element={<LinkedList />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));