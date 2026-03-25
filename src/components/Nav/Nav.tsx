import { Link, NavLink } from "react-router";

import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.topNav}>
      <Link to="/" className={styles.logo}>Grupa 4</Link>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.pushRight}>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </menu>
    </nav>
  )
}
