import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/LuisAntonioDeMelo.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
      
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio as 8:13 am" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="deletar comentario">
                <Trash  size={20}/>
              </button>
          </header>

          <p>Muito bom devon, parabéns 👏👏</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
