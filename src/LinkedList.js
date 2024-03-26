import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import './LinkedList.css';

const LinkedList = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");



  const fetchData = async (url) => {
    try {
      const response = await fetch(url, { method: 'GET'});
      const imageBlob = await response.blob();
      const headers = response.headers;
      let headerList = '';
      for (let pair of headers.entries()) {
        headerList += `\n${pair[0]}: ${pair[1]}`;
      }
      setMessage(headerList);
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(imageBlob);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };


  const fetchData_Nodo = async (url, nodo) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nodo),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(JSON.stringify(data, null, 2));
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  };

  useEffect(() => {
    const url = 'http://localhost:5000/listas/crearVacio';
    fetchData(url);
  }, []);

  function boton(titulo) {
    return (
      <Button variant="light" className="btn btn-light my-2" onClick={handleButtonClick}>
        {titulo}
      </Button>
    );
  }


  function handleButtonClick(event) {
    const buttonName = event.target.textContent;
    let url = '';
    switch (buttonName) {
      case 'crear':
        setShowModal(true);
        url = 'http://localhost:5000/listas/crearEstatica';
        return;
      case 'Añadir_Inicio':
        url = 'http://localhost:5000/listas/AñadirPrincipio';
        fetchData_Nodo(url, {"value": 12});
        return;
      case 'Añadir_Final':
        url = 'http://localhost:5000/listas/AñadirNodo';
        break;
      case 'Eliminar':
        url = 'http://localhost:5000/listas/EliminarNodo';
        break;
      case 'Buscar':
        url = 'http://localhost:5000/listas/EncontarNodo';
        break;
      case 'Abyacentes':
        url = 'http://localhost:5000/listas/EncontarAdyacentes';
        break;
      case 'Encontrar_todo':
        url = 'http://localhost:5000/listas/EncontrarTodos';
        break;
      default:
        break;
    }

    fetchData(url);
  }

   function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="linked-list">
      <div class="bar">
        <div class="bar-title">DS Visualizer</div>
        <img
          src="https://leo.uniandes.edu.co/wp-content/uploads/LogoUniandes.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="ds-visualizer"></div>
      <div className="linked-list-content">
        <div className="response"><img src={imageUrl} alt="Linked List" className="linked-list-image" />
          <div className='comentario'>{message}</div></div>
        <div className="btn-group">
          {boton('crear')}
          {boton('Añadir_Inicio')}
          {boton('Añadir_Final')}
          {boton('Eliminar')}
          {boton('Buscar')}
          {boton('Abyacentes')}
          {boton('Encontrar_todo')}
        </div>
      </div>
      <div></div>
      <div></div>
      <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
        >
            <Modal.Dialog style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            </Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Selecciona el tipo de lista: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {
              e.preventDefault();
              fetchData(`http://localhost:5000/listas/crear${selectedOption}`);
              setShowModal(false);
            }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="listaTipo"
                  id="listaEstática"
                  value="Estatica"
                  checked={selectedOption === "Estatica"}
                  onChange={handleOptionChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="listaEstática"
                >
                  Lista Estática
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="listaTipo"
                  id="listaVacio"
                  value="Vacio"
                  checked={selectedOption === "Vacio"}
                  onChange={handleOptionChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="listaVacio"
                >
                  Lista Vacía
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="listaTipo"
                  id="listaRandom"
                  value="Random"
                  checked={selectedOption === "Random"}
                  onChange={handleOptionChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="listaRandom"
                >
                  Lista Random
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                fetchData(`http://localhost:5000/listas/crear${selectedOption}` );
                setShowModal(false);
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

    </div>
  );
};

export default LinkedList;