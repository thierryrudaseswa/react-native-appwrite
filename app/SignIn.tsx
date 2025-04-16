import { View , Text, TextInput,TouchableOpacity,StyleSheet} from "react-native"
import React, { useState } from "react"
import TextCustom from "./components/TextCustom";



const SignIn = () =>{
    const [email ,setEmail] = useState ("")
    const [password, setPassword ] = useState("")

    const handleSubmit = () =>{}
    return(
        <View style={styles.container}>
            <View>
            <TextCustom style={styles.headline} fontSize={72}>
                    SignIn
                </TextCustom>

                <TextCustom>Email:</TextCustom>

                <TextInput 
                placeholder="Enter your Email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <TextCustom>Password:</TextCustom>
                <TextInput
                placeholder="Enter your Password"
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword (text)}
                
                />

<TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    headline: {
        textAlign: "center",
        marginTop: -100,
        marginBottom: 50,
        fontWeight: 700,
        fontStyle: "italic",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,

        marginTop: 10,
        marginBottom: 10,
        borderColor: "grey",
    },
    button: {
        backgroundColor: "black",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
})