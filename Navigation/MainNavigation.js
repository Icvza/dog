import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Stack = createNativeStackNavigator
const BottomTabs = createBottomTabNavigator

function MainNavigator() {
     return(
          <Stack.Navigator>
               <Stack.screen />
          </Stack.Navigator>
     )
}

export default MainNavigator