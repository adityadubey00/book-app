import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    // Retrieve the initial auth user from local storage
    const initialAuthUser = localStorage.getItem("Users");

   
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);
