import {View, Text, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/style'
import CalendatSnippet from '../components/CalendarStrip'
import FullDaySummary from '../components/FullDayView/FullDaySummary'


function Home() {
     return (
          <View>
               <CalendatSnippet/>
               <FullDaySummary SummaryDate={'Today'}/>
          </View>
     )
}

const styles = StyleSheet.create({
     Home: {
          backgroundColor: GlobalStyles.colors.primaryColor,
     }
})

export default Home 