import firebase from 'firebase'

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2TG73e7lwp5ZUH5tp8m2W158Xf_En_uw",
    authDomain: "instagram-clone-e7d7c.firebaseapp.com",
    databaseURL: "https://instagram-clone-e7d7c.firebaseio.com",
    projectId: "instagram-clone-e7d7c",
    storageBucket: "instagram-clone-e7d7c.appspot.com",
    messagingSenderId: "369922543841",
    appId: "1:369922543841:web:ccb1bbadfa00758141e7a0",
    measurementId: "G-63Y4ECTYD7"
})

const db = fireBaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
