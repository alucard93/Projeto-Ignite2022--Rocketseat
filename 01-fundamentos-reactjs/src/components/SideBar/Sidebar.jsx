import React from 'react'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

        <div className={styles.profile}>
        <Avatar src="https://github.com/alucard93.png" />
          <strong>Marcus Vinicius</strong>
          <span>Web Developer</span>
        </div>
        <footer>
          
          <a href="#">
            <PencilLine size={20}/> 
            Editar seu perfil
          </a>
        </footer>
    </aside>
  )
}
