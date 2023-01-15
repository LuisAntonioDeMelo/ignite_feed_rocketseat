import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment}:any) {

  const [likeCount, setLikedCount] = useState<number>(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikedCount((state) => {
      return state+1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LuisAntonioDeMelo.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
      
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio as 8:13 am" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button  onClick={handleDeleteComment} title="deletar comentario">
                <Trash  size={24}/>
              </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir 
                <span>
                  {likeCount}
                </span>
            </button>
        </footer>
      </div>
    </div>
  );
}
