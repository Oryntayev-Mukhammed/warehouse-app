// Ваш компонент React (Storage)

import React, { useState, useEffect } from 'react';
import { isAuthenticated} from '../utils/auth';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { getAllStorage } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../styles/assets/css/storage.css'

const AdminStorage = () => {
  const navigate = useNavigate();
  const [storage, setStorage] = useState(null); 
  const [searchId, setSearchId] = useState('');
  const [searchUsername, setSearchUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated()) {
          const storageData = await getAllStorage();
          setStorage(storageData);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [navigate]);

  // Фильтрация данных на основе searchId и searchUsername
  const filteredStorage = storage?.filter((item) => {
    const matchId = searchId
      ? item._id.startsWith(searchId)
      : true; // Показывать, если searchId пуст
    const matchUsername =
      searchUsername && item.owner
        ? item.owner.username.startsWith(searchUsername)
        : true; // Показывать, если searchUsername пуст
    return matchId && matchUsername;
  });

  return (
    <>
      {/* HTML Head Section */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Storage ET RAG</title>
      </head>

      {/* HTML Body Section */}
      <body>
        <Header />
        <div className="blog container-fluid">
          <div className="container">
            <div className="section-title row">
              <h2>Хранилища</h2>
              <p>
                Панель управления
              </p>
            </div>
            <div className="row blog-row mt-5">
              <div className="mb-3">
                <label htmlFor="searchId" className="form-label">
                  Поиск по ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchId"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="searchUsername" className="form-label">
                  Поиск по имени пользователя:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchUsername"
                  value={searchUsername}
                  onChange={(e) => setSearchUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="row blog-row mt-5">
                {storage && (
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID хранилища</th>
                        <th scope="col">Владелец</th>
                        <th scope="col">Продукты в хранилище</th>
                        <th scope="col">Объем хранилища</th>
                        <th scope="col">Максимальный вес</th>
                        <th scope="col">Максимальная размер</th>
                        {/* Добавьте другие заголовки, если необходимо */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStorage.map((storageItem, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{storageItem._id}</td>
                            <td>{storageItem.owner.username}</td>
                            <td>
                            {storageItem.repository.map((product, productIndex) => (
                                <div key={productIndex}>
                                <span>{product.name}</span>
                                <br />
                                <span>Описание: {product.description}</span>
                                <br />
                                <span>Статус: {product.status}</span>
                                <br />
                                <span>Местонахождение: {product.position}</span>
                                <br />
                                <span>Количество: {product.count}</span>
                                <br />
                                <span>-</span>
                                </div>
                            ))}
                            </td>
                            <td>{storageItem.space}</td>
                            <td>{storageItem.maxweight}</td>
                            <td>{storageItem.maxheight}</td>
                            {/* Добавьте другие ячейки, если необходимо */}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Copyright */}
        <Copyright />
      </body>
    </>
  );
};

export default AdminStorage;
