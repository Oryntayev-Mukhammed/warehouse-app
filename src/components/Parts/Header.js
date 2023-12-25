import '../../styles/assets/css/style.css';
import '../../styles/assets/css/fontawsom-all.min.css'
import '../../styles/assets/css/bootstrap.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.carousel.min.css'
import '../../styles/assets/plugins/testimonial/css/owl.theme.min.css'
import logoImage from '../../styles/assets/images/logo.png';
import { Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { isAdmin, isAuthenticated, logout } from '../../utils/auth';
import { getUser} from '../../utils/api';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminState, setIsAdminState] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoggedIn(isAuthenticated());

        if (isAuthenticated()) {
          const adminStatus = await isAdmin(); // Переименовали переменную
          setIsAdminState(adminStatus); // Используем переименованную переменную
          const userData = await getUser();
          setUser(userData.user);
        } 
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return(
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
                <li><i class="fa fa-phone"></i> +7 (747) 1710-633 </li>
                {isLoggedIn && user ? (
                  <>
                    <li className="green-cover" style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px', fontWeight: "bold" }}>{user.username}</span>
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
            <li><Link to="/" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Главная</Link></li>
            <li><Link to="/rules" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Правила</Link></li>
            <li><Link to="/subscribes" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Подписки</Link></li>
            {isAdminState ? (
                  <>
                  <li><Link to="/adminStorage" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Редактирование хранилища</Link></li>
                  </> 
                ): (
                <>
                <li><Link to="/storage" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Хранилище</Link></li>
                </>
                )}
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'green' , fontSize: '16pt', fontWeight: 'bold'}}>Связаться с нами</Link></li>

              <li class="lis"><i class="fa fa-shopping-cart"></i></li>
              <li class="lis"><i class="fa fa-search"></i></li>
            </ul>
          </div>
        </div>
        </header>

)};
  
  export default Header;