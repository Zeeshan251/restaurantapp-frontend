import {getApp, getApps, initializeApp} from 'firebase/app';

import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBc7KyR1eHN9b85rjbheM3WQ9PZqhpaUhg",
    authDomain: "restaurantapp-241c3.firebaseapp.com",
    databaseURL: "https://restaurantapp-241c3-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-241c3",
    storageBucket: "restaurantapp-241c3.appspot.com",
    messagingSenderId: "736124592694",
    appId: "1:736124592694:web:063525b6678fb66a9f6e97"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);


  export {app, firestore, storage};