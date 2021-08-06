import React from 'react'
import styles from './playlist.module.css'

const Button = ({ value }) => {
  return <button className={styles.search_button}>{value}</button>
}

export default Button
