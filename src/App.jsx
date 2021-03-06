import { BrowserRouter, Switch, Route } from "react-router-dom"
import Maker from "./components/maker/Maker"

import "./App.module.css"
import Login from "./components/login/Login"
import styles from "./App.module.css"

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
