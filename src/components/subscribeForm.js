import React from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribe } from '../utils/api'; 

const SubscribeForm = () => {
  const { subscribeId } = useParams();
  const [card, setCard] = useState('');
  const [date, setDate] = useState('');
  const [ccv, setCcv] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  const handleSubscribe = async () => {
    try {
      const result = await subscribe(card, date, ccv, subscribeId);

      if (result.success) {
        setSubscriptionSuccess(true);
        setSubscriptionError('');
      } else {
        setSubscriptionSuccess(false);
        setSubscriptionError(result.message);
      }
    } catch (error) {
      console.error('Ошибка при подписке:', error);
      setSubscriptionSuccess(false);
      setSubscriptionError('Произошла ошибка при отправке запроса.');
    }
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Storage ET RAG</title>
      </head>

      <body>
        <Header />
        <div className="container mt-5">
          <h2 className="text-center">Форма подписки</h2>

          {subscriptionSuccess ? (
            <p className="text-success text-center">Подписка успешно оформлена!</p>
          ) : (
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="card" className="form-label">
                  Номер карты:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="card"
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Дата:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ccv" className="form-label">
                  CCV:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ccv"
                  value={ccv}
                  onChange={(e) => setCcv(e.target.value)}
                />
              </div>

              <button type="button" className="btn btn-success" onClick={handleSubscribe}>
                Начать подписку
              </button>
            </form>
          )}

          {subscriptionError && <p className="text-danger text-center">{subscriptionError}</p>}
          
          <p className="text-center mt-3">
            Уже подписаны?{' '}
            <Link to={`/login`} className="btn btn-primary">
              Войти
            </Link>
          </p>
        </div>
        <Footer />

        <Copyright />
      </body>
    </>
  );
};

export default SubscribeForm;
