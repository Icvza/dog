import { View, Text, StyleSheet } from 'react-native'

function MealSummary( {typeOfMeal, meals} ){

    
    return(
        <View>
            <Text>{typeOfMeal}</Text>
            <Text>Yogurt</Text>
        </View>
    )

}

export default MealSummary