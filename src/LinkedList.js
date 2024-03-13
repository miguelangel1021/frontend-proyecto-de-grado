import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './LinkedList.css';

const LinkedList = () => {

  const [imageUrl, setImageUrl] = useState('');

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://loca');
        const imageBlob = await response.blob();
        const data = await response.json();
        setMessage(data.message);
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(imageBlob);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="linked-list">
      <div class="bar">
        <div class="bar-title">DS Visualizer</div>
        <img src="https://leo.uniandes.edu.co/wp-content/uploads/LogoUniandes.png" alt="Logo" className='logo'/>
      </div>
      <div className="ds-visualizer"></div>
      <div className="linked-list-content">
        <img src="https://cursos.clavijero.edu.mx/cursos/144_ed/modulo3/imagenes/tema3.4/inserta.jpg" alt="Linked List" className="linked-list-image" />
        {botones(3)}
      </div>
      <p>{message}</p>
      <div>
      </div>
    </div>
  );
};

function botones(numero) {
  return (
    <div className="btn-group">
      {Array.from({ length: numero }, (_, i) => (
        <Button variant="secondary" className="btn" key={i}>
          Cargar
        </Button>
      ))}
    </div>
  );
}
export default LinkedList;