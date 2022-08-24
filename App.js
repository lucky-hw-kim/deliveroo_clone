import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import {Provider} from 'react-redux';
import { store } from "./store";
import Basket from "./screens/Basket";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Restaurant" component={Restaurant}/>
          <Stack.Screen name="Basket" component={Basket}
          options={{presentation: 'modal', headerShown: false}}
          />
        </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
