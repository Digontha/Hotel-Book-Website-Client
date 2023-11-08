import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    console.log(user);
    
    const [loading, setLoading] = useState(true)


    const auth = getAuth(app)

    const createUser = (email, password, name, image) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, image)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const logEmail = currentUser?.email||user?.email
            const loggedUser = {email: logEmail}
            setUser(currentUser)
            setLoading(false)

            if(currentUser){
           
                axios.post("https://assignment-11-server-eight-lake.vercel.app/jwt",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
              }else{
                axios.post("https://assignment-11-server-eight-lake.vercel.app/logout",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
              }
        })
        return () => {
            unSubscribe()
        }
    })

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        logOut,
        loading,
        googleLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;