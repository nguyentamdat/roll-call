import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Context as LoginContext } from "../context/LogInContext";
import * as firebase from "firebase";

const LogInScreen = ({ navigation }) => {
  const { state, changeEmail, changePassword } = useContext(LoginContext);
  const { email, password } = state;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={changeEmail}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={changePassword}
        secureTextEntry
      />
      <Button
        title="Log In"
        onPress={() => {
          console.log(email, password);
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
              console.log(res);
              navigation.navigate("Main");
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 10 }}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>Sign up now!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    top: -100
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5
  },
  input: {
    backgroundColor: "#ededed",
    padding: 5,
    margin: 10
  }
});

export default LogInScreen;
