import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDF7ZZwVfdN-AQ2n-KaufhVf5zQ5hvvIkw",
  authDomain: "todolist-30f93.firebaseapp.com",
  databaseURL: "https://todolist-30f93.firebaseio.com",
  projectId: "todolist-30f93",
  storageBucket: "todolist-30f93.appspot.com",
  messagingSenderId: "651019796767"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export {
  firebase,
  firebaseDB,
}

