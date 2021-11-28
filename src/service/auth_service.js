import firebase from "firebase"

class AuthService {
  login(providerName) {
    // github / google 등등
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]()

    return firebase.auth().signInWithPopup(authProvider)
  }
}

export default AuthService
