import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    //create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //LogIn 
    const logIn = (email , password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOut
    const logOut = ()=>{
        return signOut(auth)
    }
    //Auth state chagnge
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return () => unsubsribe(); 
    },[])
    const authInfo = { user, createUser, logIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;