import React from 'react';
import '../styles/assets/css/style.css';
import '../styles/assets/css/fontawsom-all.min.css'
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import Header from './Parts/Header';
import Banner from './Parts/Banner';
import PlansContainer from './Parts/PlansContainer';
import ExperienceSection from './Parts/ExperienceSection';
import ServicesSection from './Parts/ServicesSection';
import BlogSection from './Parts/BlogSection';
import Footer from './Parts/Footer';
import Copyright from './Parts/Copyright';

const Home = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Storage ET RAG</title>
      </head>

      <body>
        <Header/>

        <Banner />

        <PlansContainer />

        <ExperienceSection />  

        <ServicesSection />

        <BlogSection />

        <Footer />

        <Copyright />
      </body>
    </>
  );
};

export default Home;
