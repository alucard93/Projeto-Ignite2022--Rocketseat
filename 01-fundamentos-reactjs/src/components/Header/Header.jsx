import React from 'react'
import styles from './Header.module.css'
import IgniteLogo from './../../assets/Ignite-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
        <img src={IgniteLogo} alt="logo Ignite" />
    </header>
  )
}
