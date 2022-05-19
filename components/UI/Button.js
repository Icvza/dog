import {View, Text, Pressable, StyleSheet} from 'react-native'

function Button ({children, onPress, mode, style}){
    return (
        <View style={style}>
            <Pressable 
            onPress={onPress}
            style={({ pressed }) => pressed && styles.Pressed}
            >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: 'pink'
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
    },
    flatText:{
        color: 'green'
    },
    Pressed: {
        backgroundColor: 'yellow',
        opacity: 0.75,
        borderRadius: 4
    }
})


export default Button 