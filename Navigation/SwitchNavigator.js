import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Overview from '../screens/Overview'
import ManageMeal from '../screens/ManageMeal'
import { GlobalStyles } from '../constants/style'
const Stack = createNativeStackNavigator()

function SwitchNavigator(){

     return(
          <NavigationContainer>
               <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: 'white' },
                    headerTintColor: 'white',
                    headerTitleStyle: { color: 'black'}
                    
               }}>
                    <Stack.Screen name='Overview'
                         component={Overview} 
                         options={{headerShown: false}}
                    />
                    <Stack.Screen name='ManageMeal' 
                         component={ManageMeal}
                         options={{
                              presentation: 'modal'
                         }}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}
export default SwitchNavigator