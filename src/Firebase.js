import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBuC8q30u-qzGMBsaoVwnwWEkjYnvSLw24",
  authDomain: "vue-chat-2077c.firebaseapp.com",
  projectId: "vue-chat-2077c",
  storageBucket: "vue-chat-2077c.appspot.com",
  messagingSenderId: "758774114058",
  appId: "1:758774114058:web:2e0c3b62a8cc31ca28fcf3"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;