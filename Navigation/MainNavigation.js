import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Overview from '../screens/Overview';
import ManageMeal from '../screens/ManageMeal';
import { GlobalStyles } from '../constants/style';
import IconButton from '../components/UI/IconButtons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import getHeaderTitle from '../components/headerHandler';
const DrawerNav = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function stackNav(){
     return(
          <Stack.Navigator>
                    <Stack.Screen name='ManageMeal' 
                         component={ManageMeal}
                         options={{
                              headerShown: false,
                              presentation: 'modal',
                              
                         }}
                    />
          </Stack.Navigator>
     )
}



function MainNavigator() {
     return(
          <NavigationContainer>
               <DrawerNav.Navigator
               screenOptions={({navigation, route}) =>({
               headerStyle: { backgroundColor: 'white'},
               headerTintColor: GlobalStyles.colors.secondaryColor ,
               tabBarStyle: { backgroundColor: 'white'},
               tabBarActiveTintColor: GlobalStyles.colors.secondaryColor,
               headerTitle: getHeaderTitle(route),
               headerRight: ({tintColor}) => 
                    <IconButton 
                         icon='add' 
                         size={30} 
                         color={tintColor}
                         onPress={ () => {
                              navigation.navigate('ManageMeal')
                         }}
                    />,
               
          })}
          >
                    <DrawerNav.Screen 
                         name={'overView'}
                         component={Overview}
                         // options={({route}) => ({
                         //      headerTitle: getHeaderTitle(route)
                         // })}
                    />
                    <DrawerNav.Screen 
                         name={'ManageMeal'}
                         component={ManageMeal}
                         options={{
                              presentation: 'modal',
                              headerShown: false
                         }}
                    />
               </DrawerNav.Navigator>
          </NavigationContainer>
     )
}

export default MainNavigator