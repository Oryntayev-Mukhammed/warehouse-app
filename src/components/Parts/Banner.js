import '../../styles/assets/css/style.css';
import '../../styles/assets/css/fontawsom-all.min.css'
import '../../styles/assets/css/bootstrap.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import storageImage from '../../styles/assets/images/storage.png';
import React from 'react';
import { Link} from 'react-router-dom';

const Banner = () => (
    <div class="banner-container container-fluid">
    <div class="row">
      <div class="col-lg-6 banner-content">
        <h2>Полностью управляемые решения для хранения</h2>
        <p>Оптимизируйте ваши потребности в хранении с нашими надежными и эффективными решениями.</p>
        <p>Независимо от того, нужно ли вам временное хранение товаров, эффективное управление запасами или оперативную курьерскую доставку, наша команда готова обеспечить вас высококачественными и профессиональными услугами.</p>

        <Link to={'/subscribes'} className='btn btn-warning'>Начать</Link>
      </div>
      <div class="col-lg-6 pr-0 banner-image">
        <img src={storageImage} alt="" />
      </div>
    </div>
  </div>
);

export default Banner;
