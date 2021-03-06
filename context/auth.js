import React, { useState, useEffect } from 'react'
import { app } from '../config/firebase'

export const Auth = React.createContext({ user: null, setUser: null });

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const getAuth = () => {
            //it's a obsevable 
            app.auth().onAuthStateChanged(function (user) {
                setUser(user);
                if(user){
                    
                    localStorage.setItem('token',user.refreshToken);
                }
                else{
                    localStorage.removeItem('token');
                }
            });
        }
        getAuth()
    }, [setUser])
    return (
        <Auth.Provider value={{
            user
        }}>
            {children}
        </Auth.Provider>
    )
}
