import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Overview from '../screens/Overview'
import ManageMeal from '../screens/ManageMeal'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Random from '../screens/Random'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNav () {
     return(
          <Drawer.Navigator>
               <Drawer.Screen 
                    name='random'
                    component={Random}
               />
          </Drawer.Navigator>
     )
}
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
                    <Stack.Screen name='DrawerNav'
                         component={DrawerNav}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}
export default SwitchNavigator