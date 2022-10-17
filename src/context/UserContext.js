import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    //create user
    const createUser = (email, password) =>{
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //LogIn 
    const logIn = (email , password)=>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //LogOut
    const logOut = ()=>{
        SetLoading(true);
        return signOut(auth)
    }
    //Auth state chagnge
    useEffect(()=>{
        
        const unsubsribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            SetLoading(false);
        })
        return () => unsubsribe(); 
    },[])
    const authInfo = { user,loading, createUser, logIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;