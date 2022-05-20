import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Overview from '../screens/Overview';
import ManageMeal from '../screens/ManageMeal';
import { GlobalStyles } from '../constants/style';
import IconButton from '../components/UI/IconButtons';

const DrawerNav = createDrawerNavigator()

function MainNavigator() {
     return(
          <NavigationContainer>
               <DrawerNav.Navigator
               screenOptions={({navigation}) =>({
               headerStyle: { backgroundColor: 'white'},
               headerTintColor: GlobalStyles.colors.secondaryColor ,
               tabBarStyle: { backgroundColor: 'white'},
               tabBarActiveTintColor: GlobalStyles.colors.secondaryColor,
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
                    />
                    <DrawerNav.Screen name='ManageMeal' 
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