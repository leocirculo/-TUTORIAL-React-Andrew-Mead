import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAPw2qs5wuuw- 25SFpb3tbf2fXWUenuWUo",
    authDomain: "print-it-cases-c31e6.firebaseapp.com",
    databaseURL: "https://print-it-cases-c31e6.firebaseio.com/",
    storageBucket: "gs://print-it-cases-c31e6.appspot.com/"
  };
  firebase.initializeApp(config);
} catch(error) {
  console.log(error);
}

export const firebaseRef = firebase.database().ref();
export default firebase;