import React, { useEffect, useState } from 'react';
import './LinkedList.css';

const LinkedList = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://');
        const imageBlob = await response.blob();
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
      <h1 className="linked-list-title">Listas Enlazadas</h1>
      <div className="linked-list-content">
        <img src={imageUrl} alt="Linked List" className="linked-list-image" />
      </div>
    </div>
  );
};

export default LinkedList;