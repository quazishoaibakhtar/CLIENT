
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const appConfig = {
    basename: '',
    defaultPath: '',
    theme: 'light',
    i18n: 'en',
    rtlLayout: false,
    firebase: { //it's from ali.adnan28
      apiKey: "AIzaSyD0_JjahZMjxLv7anccE18aajLrinXUJB0",
      authDomain: "tender-25be3.firebaseapp.com",
      databaseURL: "https://tender-25be3.firebaseio.com",
      projectId: "tender-25be3",
      storageBucket: "tender-25be3.appspot.com",
      messagingSenderId: "398155712797",
      appId: "1:398155712797:web:2acf7edd2f45246a9c39f4"
    },
  };


// Initialize Firebase
export const firebaseApp = firebase.initializeApp(appConfig.firebase);
