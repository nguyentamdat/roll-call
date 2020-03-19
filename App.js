import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { Provider as LoginProvider } from "./src/context/LogInContext";
import * as firebase from "firebase";
import MainScreen from "./src/screens/MainScreen";
import firebaseConfig from "./src/api/firebase";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <LoginProvider>
      <App />
    </LoginProvider>
  );
};


firebase.initializeApp(firebaseConfig);
