import menu from '../../utils/menu';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Menu = ({ active, action }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem('user')) || null
  );
  useEffect(() => {
    // console.log(user.admin, 'userheader');
  }, []);
  return (
    <ul className={`main-menu ${active ? 'is-active' : ''}`}>
      {menu.map((item) => (
        <li key={item.title} className="main-menu__item">
          {item.link.includes('http') ? (
            <a href={item.link} onClick={action} className={'main-menu__link'}>
              {item.title}
            </a>
          ) : (
            <NavLink
              onClick={action}
              className={'main-menu__link'}
              to={item.link}
            >
              {item.title}
            </NavLink>
          )}
        </li>
      ))}
      {/* {
        user.admin ? (
          <li className="main-menu__item">
            <NavLink
              onClick={action}
              className={'main-menu__link'}
              to={'/admin/journal'}
            >
              Calificación
            </NavLink>
          </li>
        ):null
      } */}
    </ul>
  );
};

export default Menu;
