import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          <li className={styles.navList}>
            <NavLink
              exact
              to="/"
              className={styles.NavLinkItem}
              activeClassName={styles.NavLinkActive}>
              Home
            </NavLink>
          </li>
          <li className={styles.navList}>
            <NavLink
              to="/movies"
              className={styles.NavLinkItem}
              activeClassName={styles.NavLinkActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
