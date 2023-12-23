import React, { useState, useEffect } from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import { isAuthenticated, logout } from '../utils/auth';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';

const Contact = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

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
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <div style={{marginTop:'0px'}} class=" no-margin">

        <iframe style={{width:'100%', border:'0'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2907.849804623978!2d76.7896633!3d43.2126395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883433f35062009%3A0x1727e68a5c07487!2z0JTQvtC8!5e0!3m2!1sru!2skz!4v1703370795394!5m2!1sru!2skz"  height="450" frameborder="0" allowfullscreen></iframe>

        </div>

            <div class=" contact-rooo no-margin">
                <div class="container">
                    <div class="row">


                        <div style={{padding:'20px'}} class="col-sm-7">
                            <h2 >Контактная форма</h2> <br/>
                            <div class="row cont-row">
                                <div  class="col-sm-3"><label>Введите ваше имя</label><span>:</span></div>
                                <div class="col-sm-8"><input type="text" placeholder="Введите ваше имя" name="name" class="form-control input-sm"  /></div>
                            </div>
                            <div  class="row cont-row">
                                <div  class="col-sm-3"><label>Электронную почту</label><span>:</span></div>
                                <div class="col-sm-8"><input type="text" name="name" placeholder="Введите адрес электронной почты" class="form-control input-sm"  /></div>
                            </div>
                            <div  class="row cont-row">
                                <div  class="col-sm-3"><label>Мобильный телефон</label><span>:</span></div>
                                <div class="col-sm-8"><input type="text" name="name" placeholder="Введите номер мобильного телефона" class="form-control input-sm"  /></div>
                            </div>
                            <div  class="row cont-row">
                                <div  class="col-sm-3"><label>Ваше сообщение</label><span>:</span></div>
                                <div class="col-sm-8">
                                    <textarea rows="5" placeholder="Введите ваше сообщение" class="form-control input-sm"></textarea>
                                </div>
                            </div>
                            <div style={{marginTop:'10px'}} class="row">
                                <div style={{paddingTop:'10px'}} class="col-sm-3"><label></label></div>
                                <div class="col-sm-8">
                                    <button class="btn btn-success btn-sm">Отправить сообщение</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-5">

                            <div style={{margin:'50px'}} class="serv">

                                <h2 style={{marginTop:'10px'}}>Адрес</h2>

                            Алматы Наурызбайский район, <br/>
                                Мкр Шугыла 341/6,<br/>
                                Корпус 5, кв 57<br/>
                                Телефон:+7 (747) 1710-633<br/>
                                Почта:support@smarteyeapps.com<br/>







                            </div>


                        </div>

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

export default Contact;
