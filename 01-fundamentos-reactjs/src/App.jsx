import { Header } from "./components/Header/Header"
import Post from "./Post"
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/SideBar/Sidebar";

function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main><Post nome="marcus" sobrenome='vinicius'/></main>
      </div>
    </div>
  )
}

export default App
