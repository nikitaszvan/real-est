import { initializeApp } from '@firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
} from '@firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZOnCCtuNH8kXmmMNYaAxTluIqux8S-yI",
  authDomain: "real-estate-project-356e9.firebaseapp.com",
  projectId: "real-estate-project-356e9",
  storageBucket: "real-estate-project-356e9.appspot.com",
  messagingSenderId: "530334478359",
  appId: "1:530334478359:web:a5e53f4b4854f74f46ac52"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, additionalInformation
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

     if(!userSnapshot.exists()) {
        const { email } = userAuth;
        const { displayName } = additionalInformation;

        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
     }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const updateAuthCurrentUser = async (displayName) => {
    return await updateProfile(auth.currentUser, {
        displayName: displayName
      })
}

export const signOutUser = () => signOut(auth);