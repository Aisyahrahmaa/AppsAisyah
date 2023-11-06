import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./src/Screens/home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOption={{headerShown: false }}>
        <Stack.Screen name='home' component={home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;