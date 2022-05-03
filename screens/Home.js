import {View, Text, StyleSheet} from 'react-native'
import { GlobalStyles } from '../constants/style'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

console.log(moment())
function Home() {
     return (
          <View style={styles.Home}>
               <CalendarStrip
               selectedDate={moment()}
               scrollable={true}
               daySelectionAnimation={{
                    type: 'border',
                    //highlightColor: GlobalStyles.colors.secondaryColor,
                    borderHighlightColor: GlobalStyles.colors.secondaryColor,
                    borderWidth: 2
                    
               }}
               style={{
                    height:90, 
                    paddingTop: 10, 
                    paddingBottom: 10,
               }} 
               />
          </View>
     )
}

const styles = StyleSheet.create({
     Home: {
          backgroundColor: GlobalStyles.colors.primaryColor,
          
     }
})

export default Home 