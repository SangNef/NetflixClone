import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../filebase";

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser)
        })
        return () => {
            unsubscribe();
        }
    })

    return(
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}