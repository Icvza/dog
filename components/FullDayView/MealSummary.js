import { View, Text, StyleSheet } from 'react-native'

function MealSummary( {SummaryDiscription, meals} ){
    
    return(
        <View style={styles.container}>
            <Text style={styles.summary}>{SummaryDiscription}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    summary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
    }
})
export default MealSummary