import {FlatList,  Text } from 'react-native'

function renderMeals(itemData){
    return(
        <Text>{itemData.item.category}</Text>
    )
}

function MealsList({meals}) {
    return(
        <FlatList 
            data={meals}
            renderItem={renderMeals}
        />
    )
}

export default MealsList 