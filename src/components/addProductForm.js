import React, { useState } from 'react';
import { addProductToStorage } from '../utils/api';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { useParams } from 'react-router-dom';

const AddProductForm = () => {
    const { storageOwnerId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        count: '',
        weight: '',
        height: '',
        userId: storageOwnerId,
        photo: [],
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleFileChange = (e) => {
        const files = e.target.files;
        console.log('Selected files:', files);
      
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: files,
        }));
      };
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // console.log('userId:', formData);
      
        try {
          const productData = new FormData();
          productData.append('name', formData.name);
          productData.append('description', formData.description);
          productData.append('count', formData.count);
          productData.append('weight', formData.weight);
          productData.append('height', formData.height);
          productData.append('userId', formData.userId);

          console.log("Хуй", productData);

          // Проверяем, что formData.photo - это массив
if (true) {
    // Используем первый файл из массива (предполагая, что photo - массив файлов)
    productData.append('photo', formData.photo[0]);
  } else {
    console.error('Ошибка: Некорректный формат данных для фотографий');
  }
      
          if (formData.photo.length > 0) {
            // Используем первый файл из массива (предполагая, что photo - массив файлов)
            productData.append('photo', formData.photo[0]);
          }
      
          const token = localStorage.getItem('loginToken');
          console.log('Token:', token);
      
          const response = await addProductToStorage(storageOwnerId, productData, token);
        } catch (error) {
          console.error('Ошибка при добавлении продукта:', error);
        }
      };
      
      
      

  return (
    <>
    <Header />
    <div className="container mt-5">
      <h3 className="mb-4">Добавить продукт</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Название продукта:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание продукта:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="count" className="form-label">
            Количество:
          </label>
          <input
            type="number"
            className="form-control"
            id="count"
            name="count"
            value={formData.count}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Вес:
          </label>
          <input
            type="number"
            className="form-control"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Высота:
          </label>
          <input
            type="number"
            className="form-control"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Фотографии продукта:
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            multiple
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Добавить продукт
        </button>
      </form>
    </div>
    <div className="mb-5"></div>
    <Footer />
    <Copyright />
  </>
  );
};

export default AddProductForm;
