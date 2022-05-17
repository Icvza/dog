import { View, Text, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function MealItem({id, category, ingredients}){

    const navigation = useNavigation() 

    function mealPressHandler (){
        navigation.navigate('Plan')
    }

    return(
        <Pressable 
            onPress={mealPressHandler} 
            style={({pressed})=> pressed && styles.pressed}
            >
            <View style={styles.container}>
                <View>
                    <Text>{category}</Text>
                    <Text>{id}</Text>
                </View>
                <View>
                    {ingredients.map((item, key) => (
                        <Text key={key}> { item }</Text>
                    ))}
                </View>
            </View>
        </Pressable>
    )

}

export default MealItem

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.25
    },
    container: {
        padding: 12,
        marginVertical: 8 ,
        backgroundColor: 'gray',
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 6, 
        elevation: 3,
        shadowColor: 'blue',
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.4
    },
    something: {
        fontSize: 16,
        marginBottom: 4, 
        fontWeight: 'bold'
    },
    something1:{
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4 
    }
})