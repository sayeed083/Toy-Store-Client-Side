import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //For Individual User Info
    const [user, setUser] = useState(null);
    //For Load a Spinner
    const [spinner, setSpinner] = useState(true)


    //Creating New User With Email Password
    const createUser = (email, password) => {
        setSpinner(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setSpinner(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleNameWithPhoto = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name,
            photoURL:photoURL
        })
    }


    const authInfo = {
        user,
        spinner,
        createUser,
        signIn,
        handleNameWithPhoto


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;