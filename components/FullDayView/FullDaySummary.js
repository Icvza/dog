import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import moment from 'moment'
import MealSummary from './MealSummary'
import MealsList from './MealsList'
import { DUMMY_DATA } from '../../DummyData'
import { GlobalStyles } from '../../constants/style'
const today = moment().format("MMM Do YY")

function FullDaySummary({meals, SummaryDate}) {
    return (
        <View style={styles.container}>
            <MealSummary meals={DUMMY_DATA} SummaryDiscription={SummaryDate} />
            <MealsList meals={DUMMY_DATA}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.secondaryColor,
        flexGrow: 1
    }, 
})

export default FullDaySummary