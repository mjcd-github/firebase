import {getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';

import firebaseApp from '../firebaseConfig';

const auth = getAuth(firebaseApp);

export {auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut};