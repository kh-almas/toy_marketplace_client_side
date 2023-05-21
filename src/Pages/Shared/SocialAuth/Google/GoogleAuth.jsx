import React, {useContext} from 'react';
import {AuthContext} from "../../../../Providers/AuthProvider.jsx";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const GoogleAuth = ({from}) => {
    const {authWithGoogle, updateProfileInformation} = useContext(AuthContext);
    const navigate = useNavigate();


    const googleAuthBtn = () => {
        authWithGoogle()
            .then((result) => {
                const user = result.user;
                updateProfileInformation(user , user.displayName, user.photoURL);
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                console.log(credential);
                // ...
            });
    }
    return (
        <div>
            <button onClick={googleAuthBtn}>
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleAuth;