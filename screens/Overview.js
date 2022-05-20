import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GlobalStyles, APPNAME } from '../constants/style'
import { Ionicons } from '@expo/vector-icons'
import Plan from './PlanScreen'
import Home from './Home'
import AllMeals from './AllMeals'
import IconButton from '../components/UI/IconButtons'
const BottomTabs = createBottomTabNavigator()

function Overview() {
     return (
          <BottomTabs.Navigator>
               <BottomTabs.Screen 
               name='Home' 
               component={Home}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <Ionicons name='home' size={size} color={color}/>,
                         title: 'home',
                         headerTitle: APPNAME.name.nameMe
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
               <BottomTabs.Screen 
               name='All Meals' 
               component={AllMeals}
               options={{
                    tabBarIcon: ({color, size}) => 
                         <Ionicons name='fast-food-outline' size={size} color={color}/>
               }}
               />
          </BottomTabs.Navigator>
     )
}

export default Overview