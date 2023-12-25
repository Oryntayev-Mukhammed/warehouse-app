import React, { useState } from 'react';
import { updateProductStatus } from '../utils/api';
import { useParams } from 'react-router-dom';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { Button, Form, Container} from 'react-bootstrap';

const ProductStatusForm = () => {
  const { productId } = useParams();
  const [newStatus, setNewStatus] = useState('');
  const [statusUpdateMessage, setStatusUpdateMessage] = useState('');

  const handleStatusUpdate = async () => {
    try {
      const result = await updateProductStatus(productId, newStatus);

      if (result.success) {
        setStatusUpdateMessage(result.message);
      } else {
        setStatusUpdateMessage(result.message);
      }
    } catch (error) {
      console.error('Ошибка при обновлении статуса продукта:', error);
      setStatusUpdateMessage('Не удалось обновить статус продукта');
    }
  };

  return (
    <>
        <Header />
        <Container className="mt-4">
        <Form>
            <Form.Group controlId="position">
            <Form.Label>Новый статус:</Form.Label>
            <Form.Control
                type="text"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
            />
            </Form.Group>

            <Button
            variant="outline-primary"
            onClick={handleStatusUpdate}
            >
            Обновить cтатус
            </Button>

            <p className="mt-2">{statusUpdateMessage}</p>
        </Form>
        </Container>
        <Footer />
        <Copyright />
    </>
  );
};

export default ProductStatusForm;
