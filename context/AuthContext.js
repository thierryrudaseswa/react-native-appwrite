import { useContext,createContext, useState } from "react";
import { Text,SafeAreaView } from "react-native";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading ,setLoading] = useState(false);
    const [session, setSession] = useState(false);
    const [user, setUser ] = useState(false);

    const signIn = async() => {}
    const signOut = async() =>{

    }


    const checkAuth = async () => {
        try {
            const response = await account.get();
            setUser(response);
            setSession(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const signin = async ({ email, password }) => {
        setLoading(true);
        try {
            const responseSession = await account.createEmailPasswordSession(
                email,
                password
            );
            setSession(responseSession);
            const responseUser = await account.get();
            setUser(responseUser);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    const signout = async () => {
        setLoading(true);
        await account.deleteSession("current");
        setSession(null);
        setLoading(false);
    };
    const contexData = {session,user,signIn,signOut};


    return(
        <AuthContext.Provider value={contexData}>
            {loading ? (
                <SafeAreaView><Text>Loading ..</Text></SafeAreaView>
            ) : (
                children
            )}
        </AuthContext.Provider>

    )
}

const useAuth=() =>{
    return useContext(AuthContext);
}

export {useAuth,AuthProvider,useContext};