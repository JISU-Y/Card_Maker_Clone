// import firebase from "firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth"
import firebaseApp from "./firebase"

class AuthService {
  // user login 시
  login(providerName) {
    // provider에 따라 달라짐
    // const provider = new `${providerName}AuthProvider`() // 안됨

    let provider
    if (providerName === "Google") provider = new GoogleAuthProvider()
    if (providerName === "Github") provider = new GithubAuthProvider()
    const auth = getAuth()
    return signInWithPopup(auth, provider)
  }

  // auth state change / 사용자 상태 변경 시
  onAuthChange(onUserChanged) {
    const auth = getAuth()
    return onAuthStateChanged(auth, onUserChanged)
  }

  // logout
  logout() {
    const auth = getAuth()
    return signOut(auth)
  }
}

export default AuthService
