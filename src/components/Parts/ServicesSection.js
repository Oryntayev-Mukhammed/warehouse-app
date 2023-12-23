import React from 'react';

const ServicesSection = () => (
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
);

export default ServicesSection;
