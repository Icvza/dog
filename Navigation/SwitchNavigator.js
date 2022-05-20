import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Overview from '../screens/Overview'
import { useState } from 'react'
import ManageMeal from '../screens/ManageMeal'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Random from '../screens/Random'
import { overlayColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const Stack = createNativeStackNavigator()

function SwitchNavigator(){
     return(
          <NavigationContainer>
               <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: 'white' },
                    headerTintColor: 'white',
                    headerTitleStyle: { color: 'black'},
                    initalRouteName: 'Overview'
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
                         component={() => {}}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     )
}
export default SwitchNavigator