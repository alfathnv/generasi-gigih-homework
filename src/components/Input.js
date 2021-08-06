import React from 'react'
import styles from './playlist.module.css'

const Input = ({ type, name, place }) => {
  return (
    <input
      className={styles.search_input}
      type={type}
      name={name}
      placeholder={place}
    ></input>
  )
}

export default Input
