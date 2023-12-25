import React from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';
import cloudImage1 from '../styles/assets/images/icons/001-cloud.png';
import cloudImage2 from '../styles/assets/images/icons/002-computer.png';
import cloudImage3 from '../styles/assets/images/icons/003-database.png';
import cloudImage4 from '../styles/assets/images/icons/004-cloud-network.png';
import { Link} from 'react-router-dom';

const Subscribes = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Storage ET RAG</title>
      </head>

      <body>
        <Header />

        <div class="plans-container container-fluid">
    <div class="container">
      <div class="row section-title">
      <h2>Выгодные тарифы — мы это подтвердили.</h2>
      <p>Выберите наши доступные тарифы и убедитесь в их выгоде.</p>
      </div>
      <div class="row plan-row mt-5">
        <div class="col-md-3 plan-col">
          <div class="plan-cover">
            <img src={cloudImage1} alt="Cloud"/>
            <h5>Эконом</h5>
            <ul>
            <li>5 обычных объектов</li>
            <li>2 хрупких объектов</li>
            <li>До 1 м<sup>3</sup></li>
            <li>Бесплатное перемещение в пределах одного склада</li>
            <li><h3>4 000 KZT/месяц</h3></li>
            <li><Link to={`/subscribe/6585e09f6849aeb0e6f861cb`} subscribeId={'6585e09f6849aeb0e6f861cb'} className='btn btn-success'>Начать</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 plan-col">
        <div class="plan-cover">
        <img src={cloudImage2} alt="Cloud"/>
            <h5>Стандартный</h5>
            <ul>
            <li>10 обычных объектов</li>
            <li>5 хрупких объектов</li>
            <li>До 2м<sup>3</sup></li>
            <li>Бесплатное хранение и перемещение между складами</li>
            <li><h3>7 000 KZT/месяц</h3></li>
            <li><Link to={`/subscribe/6585e09f6849aeb0e6f861cd`} subscribeId={'6585e09f6849aeb0e6f861cd'} className='btn btn-success'>Начать</Link></li>        </ul>
      </div>
    </div>
    <div class="col-md-3 plan-col">
      <div class="plan-cover">
      <img src={cloudImage3} alt="Cloud"/>
        <h5>Бизнес</h5>
        <ul>
        <li>20 обычных объектов</li>
        <li>10 хрупких объектов</li>
        <li>До 5м<sup>3</sup></li>
        <li>Премиум хранение и обслуживание</li>
        <li><h3>22 000 KZT/месяц</h3></li>
        <li><Link to={`/subscribe/6585e09f6849aeb0e6f861cf`} subscribeId={'6585e09f6849aeb0e6f861cf'} className='btn btn-success'>Начать</Link></li>      </ul>
    </div>
  </div>
  <div class="col-md-3 plan-col">
    <div class="plan-cover">
    <img src={cloudImage4} alt="Cloud"/>
        <h5>VIP</h5>
        <ul>
        <li>Неограниченное количество объектов</li>
        <li>Персональный склад по вашим требованиям</li>
        <li>Персональный курьерский сервис</li>
        <li><h3>По запросу</h3></li>
        <li><Link to={`/subscribe/6585e0a06849aeb0e6f861d1`} subscribeId={'6585e0a06849aeb0e6f861d1'} className='btn btn-success'>Начать</Link></li>      </ul>
    </div>
  </div>
  </div>
  </div>
  </div>
        <Footer />

        <Copyright />
      </body>
    </>
  );
};

export default Subscribes;
