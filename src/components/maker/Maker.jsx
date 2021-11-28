import React, { useState, useEffect } from "react"
import { useHistory } from "react-router"

import Footer from "../footer/Footer"
import Header from "../header/Header"
import Editor from "../editor/Editor"
import Preview from "../preview/Preview"

import styles from "./Maker.module.css"

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "ellie",
      company: "Samsung",
      theme: "light",
      title: "Software engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: "www.ellie.com",
    },
    {
      id: "3",
      name: "ellie",
      company: "Samsung",
      theme: "colorful",
      title: "Software engineer",
      email: "ellie@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
  ])
  const history = useHistory()

  const onLogout = () => {
    authService.logout()
  }

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/")
      }
    })
  })

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  )
}

export default Maker
