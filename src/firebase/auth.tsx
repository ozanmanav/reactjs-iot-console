import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) => auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email: string) => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password: string) => {
    if (auth.currentUser) {
        await auth.currentUser.updatePassword(password);
    }
    throw Error('No Auth User!');
};

export const getCurrentUser = () => {
    if (auth.currentUser) {
        return auth.currentUser;
    }
    throw Error('No Auth User!');
};

export function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject('Session expired, please login again!');
            }
        });
    });
}
