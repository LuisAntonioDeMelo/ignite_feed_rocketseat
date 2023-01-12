import styles from "./Post.module.css";
import perfil from "../assets/perfil.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={perfil} />
          <div className={styles.authorInfo}>
            <strong>Luis Antonio</strong>
            <span>profile</span>
          </div>
        </div>

        <time title="11 de Maio as 8:13 am" dateTime="">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return ....
        </p>
        <p>
          👌 <a href="http://">jane.desing/doctor</a>
        </p>
        <p>
          <a href="http://">#NovoProjeto</a> <a href="http://">#Nlw</a>{" "}
          <a href="http://">#Rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="deixe um comentário" />
        <button type="submit">Publicar</button>
      </form>
    </article>
  );
}
