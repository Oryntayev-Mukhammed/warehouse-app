import '../../styles/assets/css/style.css';
import '../../styles/assets/css/fontawsom-all.min.css'
import '../../styles/assets/css/bootstrap.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import logoImage from '../../styles/assets/images/logo.png';
import { Link} from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout }) => (
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
                {isLoggedIn ? (
                  <>
                    <li className="green-cover">
                      <Link to="/profile" className="btn btn-primary">
                        <i className="fa fa-user"></i> Профиль
                      </Link>
                    </li>
                    <li className="green-cover">
                      <i onClick={handleLogout} className="fa fa-sign-out" class="btn btn-danger">Выйти</i> 
                    </li>
                  </>
                ) : (
                  <>
                    <li className="green-cover">
                      <Link to="/login" className="btn btn-primary">
                        <i className="fa fa-lock"></i> Войти
                      </Link>
                    </li>
                    <li className="green-cover">
                      <Link to="/registration" className="btn btn-success">
                        <i className="fa fa-user-plus"></i> Зарегистрироваться
                      </Link>
                    </li>
                  </>
                )}
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
  );
  
  export default Header;