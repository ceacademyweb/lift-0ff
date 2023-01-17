import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Hamburger from './header/Hamburger';
import Menu from './header/Menu';
import logo from '/img/logo.svg';

const Header = (user, setUserFn) => {
  const navigate = useNavigate();
  const [userNew, setUserNew] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );
  console.log(userNew);
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  const logout = () => {
    console.log('logout');
    setUserNew(null);
    setUserFn(null);
    sessionStorage.removeItem('user');
  };
  useEffect(() => {
    console.log(userNew);
    if (!userNew) {
      location.href = '/';
    }
  }, [userNew]);
  return (
    <header className="main-header">
      <span to={'/'} className="main-logo">
        <img src={logo} alt="Logotipo" />
      </span>
      <p className="user-name-header">
        Bienvenido {userNew ? userNew.name : 'nombre'}
        <i
          title="Cerrar Sesión"
          className="fa-solid fa-right-from-bracket"
          onClick={logout}
        ></i>
      </p>
      {/* <nav className="main-nav">
        <Hamburger active={active} action={ToggleMenuFunction} />
        <Menu active={active} action={ToggleMenuFunction} />
      </nav> */}
      {/* <NavLink to="/logout" className={'btn bt-dark'}>
        Cerrar Sesión
      </NavLink> */}
    </header>
  );
};

export default Header;
