import React from 'react';

const Footer = () => (
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

);

export default Footer;
