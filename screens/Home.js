import {View, Text, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/style'
import moment from 'moment'
import { CalendatSnippet } from '../components/CalendarStrip'
import { FullDaySummary } from '../components/FullDayView'
console.log(moment())
function Home() {
     return (
          <View>
               <CalendatSnippet/> 
               <FullDaySummary/>
          </View>
     )
}

const styles = StyleSheet.create({
     Home: {
          backgroundColor: GlobalStyles.colors.primaryColor,
     }
})

export default Home 