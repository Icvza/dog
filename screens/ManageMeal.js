import {View, Text} from 'react-native'
import {useLayoutEffect} from 'react'
function ManageMeal({route, navigation}) {

     const editMealdid = route.params?.mealId
     const isEditing = !!editMealdid

     useLayoutEffect(()=> {
          navigation.setOptions({
               title: isEditing? 'Edit Expense' : 'Add expense',
          })
     }, [navigation, isEditing]) 

     

     return(
          <View>
               <Text> HELLO LLADIESSS </Text>
          </View>
     )
}

export default ManageMeal