import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

// a baixo estou usando a desestruturação em ingles destructuring, e pegando apenas oque vou usar no caso author, publishedAt e content, e onde eu quero chamar ele eu só chamo entre {}, mas pode fazer sem desestruturar que é na função chamar somente o (props) ao inves de ({author, ..., ...}) e na hora que for chamar a props tem que colocar props.author ou o nome que vc quer chamar tipo assim  <p>{props.content}</p> se fizer a desestruturação é só colocar direto  <p>{content}</p>

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/KioryFNC.png" 
        alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Barros</strong>
              <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>

  )
}