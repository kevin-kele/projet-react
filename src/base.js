import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const app = firebase.initializeApp({
    apiKey: "AIzaSyCZTStqrKznU7PiQTMPB3wE8hOX7GLP1QI",
    authDomain: "chatbox-react-cbbce.firebaseapp.com",
    databaseURL: "https://chatbox-react-cbbce-default-rtdb.firebaseio.com",
    projectId: "chatbox-react-cbbce",
    storageBucket: "chatbox-react-cbbce.appspot.com",
    messagingSenderId: "853537051205",
    appId: "1:853537051205:web:69ba9237cdcf9735f7892c",
    measurementId: "G-E8QK33645Z"
  });


export const db = app.database();
const base = Rebase.createClass(db)
export default base