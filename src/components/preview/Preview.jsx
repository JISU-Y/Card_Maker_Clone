import React from "react"

import Card from "../card/Card"

import styles from "./Preview.module.css"

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => {
          return <Card card={card} />
        })}
      </ul>
    </section>
  )
}

export default Preview
