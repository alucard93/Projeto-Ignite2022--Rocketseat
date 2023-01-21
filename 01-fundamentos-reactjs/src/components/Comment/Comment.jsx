import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import av from '../../assets/Ignite-logo.svg'

export const Comment = ({ content, deleteComment }) => {

  function handleDeleteComment () {
    deleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={av} />
      
      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcus Vinicius</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
              Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
