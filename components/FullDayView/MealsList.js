import {FlatList,  Text } from 'react-native'
import MealItem from './MealItems'

function renderMeals(itemData){
    return(
        <MealItem {...itemData.item}/>
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