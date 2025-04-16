import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import TextCustom from "../components/TextCustom";

export default function Index() {


  return (
    <SafeAreaView>
      <TouchableOpacity 
            style={styles.button} 
            >
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      <View style={styles.container}>
          <TextCustom fontSize={36}>You are logged in!</TextCustom>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,

  },
  headline:{
    paddingVertical:20
  },
  button: {
      backgroundColor: 'black',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
      margin:20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
})