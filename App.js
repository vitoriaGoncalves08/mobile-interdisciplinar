import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer, } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from 'react-native-elements'
import { createStackNavigator,  } from "@react-navigation/stack";
import Index from './Index';
import Insert from "./Insert";
export function App(props){
  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='Home' component={Index} />
          <Stack.Screen options={(props)=>( {headerStyle:{backgroundColor: '#24262b'},headerTitleStyle:{color: 'white'}, headerLeft:()=>(
            <Button
            type='clear'
            icon={<Icon name='arrow-left' size={25} color='white' />}
            onPress={() => props.navigation.goBack()}
          />
          )})} name='Register' component={Insert} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
