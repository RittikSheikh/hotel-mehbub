import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';




export const UserContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const LogOut = () => {
       return signOut(auth)
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false);
        })
        return ()=> unSubscribe();
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, LogOut, logInUser, LogInWithGoogle, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;