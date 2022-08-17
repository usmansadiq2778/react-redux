// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA4HQ0DdQMHIxcQ969cyIbrhQ8EzigFZ4A',
    authDomain: 'react-todo-c41cf.firebaseapp.com',
    projectId: 'react-todo-c41cf',
    storageBucket: 'react-todo-c41cf.appspot.com',
    messagingSenderId: '95308266000',
    appId: '1:95308266000:web:d5a662d2f4da6504476895',
    measurementId: 'G-9JM1Y49XCJ',
};

export default firebase.initializeApp(firebaseConfig);
