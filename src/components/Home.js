import React from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import cloudImage1 from '../styles/assets/images/icons/001-cloud.png';
import cloudImage2 from '../styles/assets/images/icons/002-computer.png';
import cloudImage3 from '../styles/assets/images/icons/003-database.png';
import cloudImage4 from '../styles/assets/images/icons/004-cloud-network.png';
import storageImage from '../styles/assets/images/storage.png';
import logoImage from '../styles/assets/images/logo.png';
import b1Image from '../styles/assets/images/blog/b1.png';
import b2Image from '../styles/assets/images/blog/b2.png';
import b3Image from '../styles/assets/images/blog/b3.png';
import member1Image from '../styles/assets/images/testimonial/member-01.jpg';
import member2Image from '../styles/assets/images/testimonial/member-02.jpg';

const Home = () => {
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
        {/* Header */}
        <header>
        <div class="container-fluid">
            <div class="row head-col">
              <div class="col-md-3 logo-col">
                <img src={logoImage} alt="" />
                <a class="d-md-none small-menu" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <i class="fas d-lg-none  fa-bars"></i>
                </a>
              </div>
              <div class="col-right d-none d-md-block col-md-9 pr-0">
                <ul>
                <li><i class="fa fa-phone"></i> +01 87878767656 </li>
                <li class="green-cover"><i class="fa fa-lock"></i> Login </li>
                <li class="green-cover"><i class="fa fa-user-plus"></i> Sign Up </li>
              </ul>
            </div>
          </div>
          <div id="collapseExample" class="nav-col">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="hosting.html">Hosting</a></li>
              <li><a href="about_us.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact_us.html">Contact Us</a></li>

              <li class="lis"><i class="fa fa-shopping-cart"></i></li>
              <li class="lis"><i class="fa fa-search"></i></li>
            </ul>
          </div>
        </div>
        </header>

        {/* Banner */}
        <div class="banner-container container-fluid">
          <div class="row">
            <div class="col-lg-6 banner-content">
              <h2>Полностью управляемые решения для хранения</h2>
              <p>Оптимизируйте ваши потребности в хранении с нашими надежными и эффективными решениями.</p>
              <p>Независимо от того, нужно ли вам временное хранение товаров, эффективное управление запасами или оперативную курьерскую доставку, наша команда готова обеспечить вас высококачественными и профессиональными услугами.</p>

              <button className="btn btn-warning">Начать сейчас</button>
            </div>
            <div class="col-lg-6 pr-0 banner-image">
              <img src={storageImage} alt="" />
            </div>
          </div>
        </div>

        {/* Plans Container */}
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
                  <li><button className="btn btn-success">Начать</button></li>
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
                  <li><button className="btn btn-success">Начать</button></li>
              </ul>
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
              <li><button className="btn btn-success">Начать</button></li>
            </ul>
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
              <li><button className="btn btn-success">Начать</button></li>
            </ul>
          </div>
        </div>
        </div>
        </div>
        </div>

        {/* Experience Section */}
        <section class="container-fluid experiance-container">
          <div class="container">
          <div class="section-title row">
            <h2>Наши Преимущества</h2>
            <p>Ознакомьтесь с тем, что говорят о нас</p>
          </div>
          <div class="statistic-row mt-5 row">
            <div class="col-md-3">
              <div class="statisitccol">
                <h2>10+</h2>
                <p>Складских Пространств</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="statisitccol">
                <h2>5+</h2>
                <p>Городов Обслуживания</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="statisitccol">
                <h2>1000+</h2>
                <p>Довольных Клиентов</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="statisitccol">
                <h2>3+</h2>
                <p>Года Опыта</p>
              </div>
            </div>
          </div>
        </div>
        </section>   

        {/* Services Section */}
        <section className="services-container">
          <div className="container">
            <div className="row section-title">
              <h2>Наши Услуги</h2>
              <p>Ознакомьтесь с тем, что мы предоставляем</p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="service-box">
                  <i className="fas fa-warehouse"></i>
                  <h3>Гибкие Пространства</h3>
                  <p>Аренда складских помещений с различной площадью для ваших нужд.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="service-box">
                  <i className="fas fa-headset"></i>
                  <h3>Онлайн Поддержка 24/7</h3>
                  <p>Наша команда готова помочь вам в любое время дня и ночи.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="service-box">
                  <i className="fas fa-truck"></i>
                  <h3>Грузоперевозки</h3>
                  <p>Организация доставки и перевозки ваших товаров между складами.</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="service-box">
                  <i className="fas fa-shield-alt"></i>
                  <h3>Безопасность и Контроль</h3>
                  <p>Современные системы безопасности и мониторинга на всех объектах.</p>
                </div>
              </div>

              {/* Добавьте здесь другие услуги, при необходимости */}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <div className="blog-container container-fluid">
          <div className="container">
            <div className="section-title row">
              <h2>Наш Блог</h2>
              <p>Интересные статьи и новости о складских услугах</p>
            </div>
            <div className="row blog-row mt-5">
              <div className="col-md-4">
                <div className="blog-col">
                  <img src={b1Image} alt="Warehouse Blog Image 1" />
                  <span>12 октября 2019</span> 
                  <h4>Как эффективно использовать складское пространство</h4> 
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-col">
                  <img src={b2Image} alt="Warehouse Blog Image 2" />
                  <span>12 октября 2019</span> 
                  <h4>Современные тенденции в управлении запасами</h4> 
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-col">
                  <img src={b3Image} alt="Warehouse Blog Image 3" />
                  <span>12 октября 2019</span> 
                  <h4>Как выбрать оптимальный склад для вашего бизнеса</h4> 
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <h2>О Нас</h2>
                <p>
                  Наша компания предоставляет высококачественные услуги по аренде складских пространств. Мы специализируемся на предоставлении клиентам гибких и безопасных решений для хранения и управления запасами.
                </p>
                <p>Мы фокусируемся на технологиях, способных снизить затраты, оптимизировать процессы и ускорить время выхода на рынок. Поддерживаемые нашими качественными процессами и богатым опытом управления глобальными... </p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h2>Полезные Ссылки</h2>
                <ul className="list-unstyled link-list">
                  <li><a href="#/about">О нас</a><i className="fa fa-angle-right"></i></li>
                  <li><a href="#/services">Услуги</a><i className="fa fa-angle-right"></i></li>
                  <li><a href="#/pricing">Цены</a><i className="fa fa-angle-right"></i></li>
                  <li><a href="#/contact">Контакты</a><i className="fa fa-angle-right"></i></li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 map-img">
                <h2>Контакты</h2>
                <address className="md-margin-bottom-40">
                  Ваше Складское Пространство <br/>
                  Адрес вашего склада, <br/>
                  Ваш Город, Страна <br/>
                  Телефон: +7 123 456 789 <br/>
                  Email: <a href="mailto:info@yourwarehouse.com" className="">info@yourwarehouse.com</a><br/>
                  Web: <a href="https://yourwarehouse.com/" className="">www.yourwarehouse.com</a>
                </address>
              </div>
            </div>
          </div>
        </footer>


        {/* Copyright */}
        <div class="copy">
          <div class="container">
            <a href="https://www.smarteyeapps.com/">2023 &copy; All Rights Reserved </a>
            
            <span>
              <a><i class="fab fa-github"></i></a>
              <a><i class="fab fa-google-plus-g"></i></a>
              <a><i class="fab fa-pinterest-p"></i></a>
              <a><i class="fab fa-twitter"></i></a>
              <a><i class="fab fa-facebook-f"></i></a>
            </span>
          </div>

        </div> 
      </body>
    </>
  );
};

export default Home;
