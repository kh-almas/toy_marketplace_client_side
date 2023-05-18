import React, {createContext, useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileInformation= (user, name, photoURl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURl,
        }).then(() => {
            setIsProfileUpdated(!isProfileUpdated);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        })

        return () => {
            return unsubscribe();
        }
    }, []);

    const userManagement = {user, userRegistration, updateProfileInformation};
    return (
        <AuthContext.Provider value={userManagement}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;