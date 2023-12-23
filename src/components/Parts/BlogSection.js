import React from 'react';
import b1Image from '../../styles/assets/images/blog/b1.png';
import b2Image from '../../styles/assets/images/blog/b2.png';
import b3Image from '../../styles/assets/images/blog/b3.png';

const BlogSection = () => (
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
);

export default BlogSection;
