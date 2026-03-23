import clsx from "clsx";
import { NavLink } from "react-router";

import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav>
      <menu>
        <li>
          <NavLink
            className={({ isActive }) => clsx({ [styles.active]: isActive })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => clsx({ [styles.active]: isActive })}
            to="weather"
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => clsx({ [styles.active]: isActive })}
            to="counter"
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => clsx({ [styles.active]: isActive })}
            to="todos"
          >
            Todos
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}
