import React, { useEffect } from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"

import styles from "./Login.module.css"
import { useHistory } from "react-router"

const Login = ({ authService }) => {
  const history = useHistory()

  // maker 컴포넌트로
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    })
  }

  // on Login, get the user uid
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid)) // Google / Github 인지 text 가져오기
  }

  useEffect(() => {
    // firebase 관련 동작 요청은 service 안에
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid)
    })
  })

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}

export default Login
