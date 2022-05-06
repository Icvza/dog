import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator

function MainNavigator() {
     return(
          <Stack.Navigator>
               <Stack.screen />
          </Stack.Navigator>
     )
}

export default MainNavigator