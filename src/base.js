import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initiallizeApp({
    apiKey: "AIzaSyCZTStqrKznU7PiQTMPB3wE8hOX7GLP1QI",
    authDomain: "chatbox-react-cbbce.firebaseapp.com",
    databaseURL: "https://chatbox-react-cbbce-default-rtdb.firebaseio.com",
    
})
const base = Rebase.createClass(firebase.database())

export {firebaseApp}
export default base