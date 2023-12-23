import React, { useState, useEffect } from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import { isAuthenticated, logout } from '../utils/auth';
import Header from './Parts/Header';
import Banner from './Parts/Banner';
import PlansContainer from './Parts/PlansContainer';
import ExperienceSection from './Parts/ExperienceSection';
import ServicesSection from './Parts/ServicesSection';
import BlogSection from './Parts/BlogSection';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';

const Home = () => {
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

        {/* Banner */}
        <Banner />

        {/* Plans Container */}
        <PlansContainer />

        {/* Experience Section */}
        <ExperienceSection />  

        {/* Services Section */}
        <ServicesSection />

        {/* Blog Section */}
        <BlogSection />


        {/* Footer */}
        <Footer />

        {/* Copyright */}
        <Copyright />
      </body>
    </>
  );
};

export default Home;
