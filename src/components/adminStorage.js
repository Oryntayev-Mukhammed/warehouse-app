// Ваш компонент React (Storage)

import React, { useState, useEffect} from 'react';
import { isAuthenticated} from '../utils/auth';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { getAllStorage } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../styles/assets/css/storage.css'
import { Link} from 'react-router-dom';

const AdminStorage = () => {
  const navigate = useNavigate();
  const [storage, setStorage] = useState(null); 
  const [searchId, setSearchId] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [searchProductId, setSearchProductId] = useState('');

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

  const filteredStorage = storage?.filter((item) => {
    const matchId = searchId
      ? item._id.startsWith(searchId)
      : true; 
    const matchUsername =
      searchUsername && item.owner
        ? item.owner.username.startsWith(searchUsername)
        : true; 
    const matchProductId = searchProductId
      ? item.repository.some((product) =>
          product._id.startsWith(searchProductId)
        )
      : true; 
    return matchId && matchUsername && matchProductId;
  });

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Storage ET RAG</title>
      </head>

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
              <div className="mb-3">
                <label htmlFor="searchProductId" className="form-label">
                  Поиск по ID объекта:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="searchProductId"
                  value={searchProductId}
                  onChange={(e) => setSearchProductId(e.target.value)}
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
                        <th scope="col">Объекты в хранилище</th>
                        <th scope="col">Объем хранилища</th>
                        <th scope="col">Максимальный вес</th>
                        <th scope="col">Максимальная размер</th>
                        <th scope='col'>Действия</th>
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
                                <span>Id: {product._id}</span>
                                <br />
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
                                <span><Link className='btn btn-link'>Сменить состояние</Link></span>
                                <br />
                                <span>-</span>
                                </div>
                            ))}
                            </td>
                            <td>{storageItem.space}</td>
                            <td>{storageItem.maxweight}</td>
                            <td>{storageItem.maxheight}</td>
                            <td><Link to={`/add-product/${storageItem.owner._id}`} storageOwnerId={storageItem.owner._id} className='btn btn-link'>Добавить продукт</Link></td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
            </div>
          </div>
        </div>

        <Footer />

        <Copyright />
      </body>
    </>
  );
};

export default AdminStorage;
