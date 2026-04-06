import { Link, NavLink } from "react-router";
import { useAuth } from "../../features/Auth/context/useAuth";

import styles from './Nav.module.css';

export function Nav() {
  const {user, logout} = useAuth();
  
  return (
    <nav className={styles.topNav}>
      <Link to="/" className={styles.logo}>Grupa 4</Link>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/comm">Communication</NavLink>
        </li>
        {user && <li className={styles.pushRight}>
            Welcome, {user.firstName}!
            <Link to="/login" onClick={logout}>Logout</Link>
          </li>}

        {!user && (
          <>
            <li className={styles.pushRight}>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </menu>
    </nav>
  )
}
