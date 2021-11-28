// import firebase from "firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"
import firebaseApp from "./firebase"

class AuthService {
  login(providerName) {
    // provider에 따라 달라짐
    // const provider = new `${providerName}AuthProvider`() // 안됨

    let provider
    if (providerName === "Google") provider = new GoogleAuthProvider()
    if (providerName === "Github") provider = new GithubAuthProvider()
    const auth = getAuth()
    return signInWithPopup(auth, provider)
  }
}

export default AuthService
