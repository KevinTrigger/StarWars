import {NavLink} from "react-router-dom";

import cl from './Header.module.scss';

const Header = () => {
  return (
    <div className={cl.container}>
        <ul className={cl.list__container}>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/people?page=1">People</NavLink></li>
          <li><NavLink to="/not-found" exact>Not found</NavLink></li>
        </ul>
    </div>
  )
}

export default Header;