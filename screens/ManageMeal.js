import {View, StyleSheet} from 'react-native'
import {useLayoutEffect} from 'react'
import IconButton from '../components/UI/IconButtons'
import Button from '../components/UI/Button'

function ManageMeal({route, navigation}) {

     const editMealdid = route.params?.mealId
     const isEditing = !!editMealdid

     useLayoutEffect(()=> {
          navigation.setOptions({
               title: isEditing? 'Edit Expense' : 'Add expense',
          })
     }, [navigation, isEditing])

   

     function deleteMealItemHandler() {
          navigation.goBack()
     }
     function cancelItemHandler () {
          navigation.goBack()
     }
     function confirmHandler (){
          navigation.goBack()
     }
     
     return(
          <View style={styles.container}>
               <View style={styles.buttons}>
                    <Button 
                         style={styles.button}
                         mode={'flat'} 
                         onPress={cancelItemHandler}
                         >CANCEL
                    </Button>
                    <Button
                         style={styles.button}
                         onPress={confirmHandler}
                         >{isEditing? 'Update': 'Add'} 
                    </Button>
               </View>
               { isEditing && (
                    <View style={styles.deleatContainer}> 
                         <IconButton icon='trash'
                              size={30} 
                              color={'black'}
                              onPress={deleteMealItemHandler}
                              />
                    </View>
               )}
          </View>
     )
}

export default ManageMeal

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 24,
          backgroundColor: 'gray'
     },
     buttons: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
     },
     button: {
          minWidth: 120,
          marginHorizontal: 8
     },
     deleatContainer: {
          marginTop: 16,
          paddingTop: 8,
          borderTopWidth: 2,
          borderTopColor: 'blue',
          alignItems: 'center'
     }
})