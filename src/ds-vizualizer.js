import React from 'react';
import './ds-visualizer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DSVisualizer = () => {
  return (
    <div className="ds-visualizer">
      <div class="bar">
        <div class="bar-title">DS Visualizer</div>
        <img src="https://leo.uniandes.edu.co/wp-content/uploads/LogoUniandes.png" alt="Logo" />
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

    </div>

  );
};


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
          <Button variant="primary" className="btn">
            Cargar
          </Button>
          <Button variant="secondary" className="btn">
            Predefinido
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}


// function handleSubmit(event) {
//   // Evita el comportamiento predeterminado del formulario
//   event.preventDefault();

//   // Crea un nuevo formulario
//   const form = new FormData();

//   // Agrega el archivo al formulario
//   form.append('file', inputRef.current.files[0]);

//   // Envía el formulario a la API
//   fetch('/api/upload', {
//     method: 'POST',
//     body: form,
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Procesa la respuesta de la API
//     console.log(data);
//   })
//   .catch(error => {
//     // Maneja el error
//     console.error(error);
//   });
// }


export default DSVisualizer;