/* eslint-disable no-unused-vars */
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseconfig.js';

export const login = (onNavigate, userEmail, userPassword, emailError, passwordError) => {
  const email = userEmail.value;
  const password = userPassword.value;
  emailError.textContent = '';
  passwordError.textContent = '';
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      onNavigate('/wall');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
    });
};

export function registerUserWithEmailAndPassword(email, password, username) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user);
      return updateProfile(auth.currentUser, {
        displayName: username,
      })
        .catch((error) => {
          const errorCode = error.code;
        });
    });
}

export function signOutUser() {
  return signOut(auth)
    .then(() => {
    }).catch((error) => {
      const errorSignOut = error.message;
    });
}

const provider = new GoogleAuthProvider();
export const googleLogin = (onNavigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onNavigate('/wall');
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};
