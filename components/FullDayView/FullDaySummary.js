import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import moment from 'moment'
import MealSummary from './MealSummary'
import MealsList from './MealsList'
import { DUMMY_DATA } from '../../DummyData'

const today = moment().format("MMM Do YY")

function FullDaySummary({meals, SummaryDate}) {
    return (
        <View>
            <MealSummary meals={DUMMY_DATA} SummaryDiscription={SummaryDate} />
            <MealsList meals={DUMMY_DATA}/>
        </View>
    )
}

export default FullDaySummary