import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import prBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

// author {  avatar_url : "", name: "", role: ""}
// publishedAt: Date
// content: String
//const comments = [1, 2, 3];

export function Post({ author, publishedAt, content }: any) {
  const [comments, setComments] = useState<string []>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: prBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  // estado = variaveis que eu quero o componente monitore

  function handleCreateNewComment() {
    event?.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewComentChange() {
    event?.target.setCustomValidity('');
    setNewCommentText(event?.target?.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  function hanldeNewCommentInvalid() {
    event?.target.setCustomValidity('esse campo é obrigatório');
  }
  
  const isNeWcOommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line: any) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>{" "}
              </p>
            );
          } else if (line.type === "hashtag") {
            return line.content.map((hash: any) => (
              <a href="#" key={hash}>
                {hash}{" "}
              </a>
            ));
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="content"
          value={newCommentText}
          placeholder="deixe um comentário"
          onChange={handleNewComentChange}
          onInvalid={hanldeNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNeWcOommentEmpty} >Publicar</button>
        </footer>
      </form>
      
      <div className={styles.commentList}>
        {comments.map((comment: any) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
