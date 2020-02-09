import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAY7bGfd1AfCNzRuLmKeMs8UFQt_WF0OYA",
  authDomain: "reactcrudernest.firebaseapp.com",
  databaseURL: "https://reactcrudernest.firebaseio.com",
  projectId: "reactcrudernest",
  storageBucket: "reactcrudernest.appspot.com",
  messagingSenderId: "781316748688"
};
// apiKey: "AIzaSyAY7bGfd1AfCNzRuLmKeMs8UFQt_WF0OYA",
// authDomain: "reactcrudernest.firebaseapp.com",
// databaseURL: "https://reactcrudernest.firebaseio.com",
// projectId: "reactcrudernest",
// storageBucket: "reactcrudernest.appspot.com",
// messagingSenderId: "781316748688",
// appId: "1:781316748688:web:383476a99659a361f9af15",
// measurementId: "G-C7Q6J1NFFX"
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;