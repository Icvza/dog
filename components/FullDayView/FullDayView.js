import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import moment from 'moment'
import MealSummary from './MealSummary'
import MealsList from './MealsList'

const today = moment().format("MMM Do YY")

function FullDaySummary({meals, MealCategory}) {
    return (
        <View>
            <MealSummary meals={meals} typeOfMeal={MealCategory} />
            <MealsList/>
        </View>
    )
}

export default FullDaySummary