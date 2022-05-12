import { View, Text, StyleSheet, Pressable} from 'react-native'

function MealItem({id, category, ingredients}){

    function renderIng (ingredients){
        console.log(ingredients.length)
        for(const group of ingredients) {
            console.log(ingredients)
            console.log(group)
                return (
                    <Text>{group}</Text>
                )
        }
    }



    return(
        <Pressable>
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