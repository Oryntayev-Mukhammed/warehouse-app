import React, { useState, useEffect } from 'react';
import { isAuthenticated} from '../utils/auth';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { getStorage } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../styles/assets/css/storage.css'

const Storage = () => {
  const navigate = useNavigate();
  const [storage, setStorage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated()) {
          const storageData = await getStorage();
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
              <h2>Ваше хранилище</h2>
              <p>
                Добро пожаловать в ваше персональное хранилище. Здесь вы можете хранить, управлять и наслаждаться
                безопасным доступом к вашим вещам.
              </p>
            </div>
            <div className="row blog-row mt-5">
            {storage &&
              storage.repository.map((file, index) => (
                <div className="col-md-4" key={index}>
                  <div className="file-card">
                    <div className="file-image">
                      {file.photo.map((photo, photoIndex) => (
                        <img key={photoIndex} className="img-fluid" src={`http://localhost:3000/photo/${photo}`} alt="" />
                      ))}
                    </div>
                    <div className="file-details">
                      <h4 className="file-name">{file.name}</h4>
                      <p className="file-description">{file.description}</p>
                      <div className="file-stats">
                        <p>{`Количество: ${file.count}`} </p>
                        <p>{`Вес: ${file.weight}`} кг</p>
                        <p>{`Высота: ${file.height}`} метров</p>
                        <p>{`Статус: ${file.status}`} </p>
                        <p>{`Местонахождение: ${file.position}`}</p>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />

        <Copyright />
      </body>
    </>
  );
};

export default Storage;
