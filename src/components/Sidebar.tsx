import styles from "./Sidebar.module.css";

import perfil from "../assets/perfil.png";
import background from "../assets/background.jpg";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={background} />

      <div className={styles.profile}>
        <img src={perfil} />
        <strong>User </strong>
        <span>Profile</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
