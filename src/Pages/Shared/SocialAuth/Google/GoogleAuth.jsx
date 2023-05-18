import React, {useContext} from 'react';
import {AuthContext} from "../../../../Providers/AuthProvider.jsx";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const GoogleAuth = () => {
    const {authWithGoogle, updateProfileInformation} = useContext(AuthContext);


    const googleAuthBtn = () => {
        authWithGoogle()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
                const token = credential.accessToken;
                console.log(token);
                // The signed-in user info.

                const user = result.user;
                updateProfileInformation(user , user.displayName, user.photoURL);
                console.log(user);

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