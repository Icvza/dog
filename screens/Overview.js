import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Plan from './PlanScreen'
import Home from './Home'
import { GlobalStyles } from '../constants/style'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { Ionicons } from '@expo/vector-icons'

const BottomTabs = createBottomTabNavigator()

function Overview() {
     return (
          <BottomTabs.Navigator screenOptions={{
               headerStyle: { backgroundColor: 'white'},
               headerTintColor: GlobalStyles.colors.secondaryColor ,
               tabBarStyle: { backgroundColor: 'white'},
               tabBarActiveTintColor: GlobalStyles.colors.secondaryColor
          }}
          >
               <BottomTabs.Screen 
               name='Home' 
               component={Home}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <Ionicons name='home' size={size} color={color}/>
               }}
               />
               <BottomTabs.Screen
               name='Plan' 
               component={Plan} 
               options={{
                    tabBarIcon: ({color, size}) =>
                         <Ionicons name="calendar" size={size} color={color} />
               }}
               />
          </BottomTabs.Navigator>
     )
}

export default Overview