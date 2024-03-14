import React, { useState } from 'react';
import Modal from 'react-modal';
import './ds-visualizer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LinkedList from './LinkedList';
import { BrowserRouter } from 'react-router-dom';

const DSVisualizer = () => {
  // Estado para almacenar el nombre del archivo
  const [nameArchivo, setNameArchivo] = useState('');

  // Estado para almacenar el archivo
  const [archivo, setArchivo] = useState(null);

  // Estado para controlar si la ventana modal está abierta
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Para la navegacion entre tabs
  const navigate = useNavigate();

  // Función para abrir la ventana modal
  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleTabChange(tab) {
    navigate(tab);
  }

  // Función para cerrar la ventana modal
  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleFileChange(event) {
    // Obtiene el archivo seleccionado
    const file = event.target.files[0];

    // Actualiza el estado del archivo y del nombre del archivo
    setNameArchivo(file.name);
    setArchivo(file);
  }

  function handleSubmit(event) {
    // Evita el comportamiento predeterminado del formulario
    event.preventDefault();

    // Crea un nuevo formulario
    const form = new FormData();

    // Agrega el archivo al formulario
    form.append('file', archivo);

    // Envía el formulario a la API
    fetch('/api/upload', {
      method: 'POST',
      body: form,
    })
      .then(response => response.json())
      .then(data => {
        // Procesa la respuesta de la API
        console.log(data);
      })
      .catch(error => {
        // Maneja el error
        console.error(error);
      });
  }


  function BasicExample(name, description) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className="btn-group" >
            <Button variant="secondary" className="btn" onClick={handleOpenModal}>
              Cargar
            </Button>
            <Button variant="secondary" className="btn">
              Predeterminado
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div className="ds-visualizer">
      <div class="bar">
        <div class="bar-title">DS Visualizer</div>
        <img src="https://leo.uniandes.edu.co/wp-content/uploads/LogoUniandes.png" alt="Logo" className='logo' />
      </div>
      <h1 className="ds-visualizer-title">DS Vizualizer</h1>
      <div className="ds-visualizer">
        <h1 className="welcome-message">
          ¡Bienvenido a nuestra herramienta para desarrolladores!
        </h1>
        <p className="description">
          Esta plataforma está diseñada para ayudarte a comprender mejor las
          estructuras de datos mediante la revisión de código. Explora temas
          relacionados con la estructura y la lógica de desarrollo.
        </p>
      </div>
      <div className="topics-container">
        {BasicExample('Listas Enlazadas', 'Visualiza cómo funciona una lista enlazada')}
        {BasicExample('Grafos', 'Visualiza cómo funciona un grafo')}
        {BasicExample('Arboles', 'Visualiza cómo funciona un árbol')}
      </div>
      {/* Ventana modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Ventana modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2 className="modal-title">Cargar Codigo</h2>
        <p className="modal-body">
          Ajdunta el documento .py con la implementacion realizada.
        </p>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
        </form>
        {/* Muestra el nombre del archivo */}
        <p>{nameArchivo}</p>
        <div className="btn-group" >
          <button
            className="modal-button"
            onClick={handleCloseModal}> Regresar </button>
          <button
            className="modal-button"
            onClick={handleTabChange('/LinkedList')}> Enviar </button>
        </div>
      </Modal>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DSVisualizer />} />
        <Route path="/LinkedList" element={<LinkedList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );

};
export default DSVisualizer;