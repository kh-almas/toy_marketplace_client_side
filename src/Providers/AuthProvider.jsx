import React, {createContext, useEffect, useState} from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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

        return () => {
            return unsubscribe();
        }
    }, []);

    const userManagement = {user, userLogin, userRegistration, updateProfileInformation, logout};

    return (
        <AuthContext.Provider value={userManagement}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;