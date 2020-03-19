import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Context as LoginContext } from "../context/LogInContext";
import * as firebase from "firebase";

const SignUpScreen = () => {
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
        title="Sign up"
        onPress={() => {
          console.log(email, password);
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
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
    marginLeft: 10
  },
  input: {
    backgroundColor: "#ededed",
    padding: 5,
    margin: 10
  }
});

export default SignUpScreen;
