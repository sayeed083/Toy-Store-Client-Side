import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    //For Individual User Info
    const [user, setUser] = useState(null);
    //For Load a Spinner
    const [spinner, setSpinner] = useState(true)



    // The Special Providers 
    const theGoogleProvider = new GoogleAuthProvider()


    // Log in With Google

    const logInwithGoogle = () => {
        return signInWithPopup(auth, theGoogleProvider)
    }




    //Creating New User With Email Password
    const createUser = (email, password) => {
        setSpinner(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setSpinner(true)
        return signOut(auth)
    }

    const handleNameWithPhoto = (user, name, photoURL) => {
        // console.log('ss', user, name, photoURL);
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, loggedUser => {
            console.log('Login USER auth-state observer', loggedUser);
            setUser(loggedUser);
            setSpinner(false)
        })
        return () => {
            unsubscribed()
        }
    }, [])


    const authInfo = {
        user,
        handleNameWithPhoto,
        spinner,
        createUser,
        signIn,
        logOut,
        logInwithGoogle


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;