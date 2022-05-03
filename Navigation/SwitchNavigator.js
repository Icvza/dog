import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Overview from '../screens/Overview'

const Stack = createNativeStackNavigator()

function SwitchNavigator(){

     return(
          <NavigationContainer>
               <Stack.Navigator>
                    <Stack.Screen name='Overview'
                    component={Overview} 
                    options={{headerShown: false}}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}
export default SwitchNavigator