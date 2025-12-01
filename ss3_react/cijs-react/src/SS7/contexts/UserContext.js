import { createContext, useContext } from "react";

const UserContext = createContext({
    isLogin: false,
    name: '',
    email: '',
})

// Custom Hook
export const useUserContext = () => useContext(UserContext)

export default UserContext;