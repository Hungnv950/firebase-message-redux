import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDSFl6v6nSLkzfKeM6Uj5ee00PlrKWqUMs",
  authDomain: "chatbot-13d86.firebaseapp.com",
  databaseURL: "https://chatbot-13d86.firebaseio.com",
  projectId: "chatbot-13d86",
  storageBucket: "chatbot-13d86.appspot.com",
  messagingSenderId: "44487227915"
};

firebase.initializeApp(config);

export default firebase;
// vì test thử database nên ta export database trong firebase
export const database = firebase.database();
