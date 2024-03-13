import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import LinkedList from './LinkedList';
import DSVisualizer from './ds-vizualizer';
import { useRoutes } from 'react-router-dom';

function Rutas() {
  const routing = useRoutes([
    { path: '/LinkedList', element: <LinkedList /> },
    { path: '/como', element: <DSVisualizer /> },
  ]);

  return <Routes>{routing}</Routes>;
}

function App() {
  return (
    <Router>
      <Rutas />
    </Router>
  );
}

export default App;