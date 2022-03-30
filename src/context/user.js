import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = useState(null);

    // const currentUser = {
    //     name: "John",
    //     interests: ["Cooking", "Coding", "Words beginning with 'co'"]
    // }
    
    return <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
}

export { UserContext, UserProvider };