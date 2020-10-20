import *as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA4HuvZz948CdNxuZhXU7gxwRzwW_V4JmQ",
  authDomain: "app-development-55383.firebaseapp.com",
  databaseURL: "https://app-development-55383.firebaseio.com",
  projectId: "app-development-55383",
  storageBucket: "app-development-55383.appspot.com",
  messagingSenderId: "35158712275",
  appId: "1:35158712275:web:875f7e8c6debab71491926"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;