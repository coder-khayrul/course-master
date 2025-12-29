import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    //**-----FOR USER REGISTRATION-----
    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //**-----FOR USER LOGIN-----
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //**-----FOR SIGN UP WITH GOOGLE */
    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }
    //**-----FOR OVSERVE USER DATA */
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])
    //**-----FOR UPDATE USER DATA */
  const updateUserProfile = async (updatedData) => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, updatedData);
      setUser((prev) => ({ ...prev, ...updatedData }));
    }
  };
//**-----FOR LOG OUT USER  */
  const logOutUser = () => {
    return signOut(auth)
  }
    const userInfo = {
        user,
        registerWithEmailPass,
        signInWithGoogle,
        loginWithEmailPass,
        updateUserProfile,
        logOutUser,
        setUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;