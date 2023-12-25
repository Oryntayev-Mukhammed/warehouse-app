import React, { useState } from 'react';
import { updateProductPosition } from '../utils/api';
import { useParams } from 'react-router-dom';
import Header from './Parts/Header';
import Copyright from './Parts/Copyright';
import Footer from './Parts/Footer';
import { Container, Form, Button } from 'react-bootstrap';

const ProductPositionForm = () => {
  const { productId } = useParams();
  const [newPosition, setNewPosition] = useState('');
  const [positionUpdateMessage, setPositionUpdateMessage] = useState('');

  const handlePositionUpdate = async () => {
    try {
      const result = await updateProductPosition(productId, newPosition);

      if (result.success) {
        setPositionUpdateMessage(result.message);
      } else {
        setPositionUpdateMessage(result.message);
      }
    } catch (error) {
      console.error('Ошибка при обновлении позиции продукта:', error);
      setPositionUpdateMessage('Не удалось обновить позицию продукта');
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <Form>
          <Form.Group controlId="position">
            <Form.Label>Новая позиция:</Form.Label>
            <Form.Control
              type="text"
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            onClick={handlePositionUpdate}
          >
            Обновить позицию
          </Button>

          <p className="mt-2">{positionUpdateMessage}</p>
        </Form>
      </Container>
      <Footer />
      <Copyright />
    </>
  );
};

export default ProductPositionForm;
