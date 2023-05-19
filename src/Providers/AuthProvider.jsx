import React, {createContext, useEffect, useState} from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import auth from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const updateProfileInformation= (user, name, photoURl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURl,
        }).then(() => {
            setIsProfileUpdated(!isProfileUpdated);
        });
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user);
        })

        setIsLoading(false);
        return () => {
            return unsubscribe();
        }
    }, [isProfileUpdated]);

    const userManagement = {user, userLogin, userRegistration, updateProfileInformation, logout, authWithGoogle, isLoading, setIsLoading};

    return (
        <AuthContext.Provider value={userManagement}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;