import React from "react"
import CardEditForm from "../card_edit_form/Card_edit_form"

import styles from "./Editor.module.css"

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return <CardEditForm card={card} />
      })}
    </section>
  )
}

export default Editor
