import menu from '../../utils/menu';
import { NavLink } from 'react-router-dom';

const Menu = ({ active, action }) => {
  return (
    <ul className={`main-menu ${active ? 'is-active' : ''}`}>
      {menu.map((item) => (
        <li key={item.title} className="main-menu__item">
          <NavLink
            onClick={action}
            className={'main-menu__link'}
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
