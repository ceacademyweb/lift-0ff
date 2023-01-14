import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './header/Hamburger';
import Menu from './header/Menu';
import logo from '/img/logo.svg';

const Header = () => {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <header className="main-header">
      <NavLink to={'/'} className="main-logo">
        <img src={logo} alt="Logotipo" />
      </NavLink>
      {/* <nav className="main-nav">
        <Hamburger active={active} action={ToggleMenuFunction} />
        <Menu active={active} action={ToggleMenuFunction} />
      </nav> */}
    </header>
  );
};

export default Header;
