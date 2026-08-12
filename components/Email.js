import React from "react";
import { View, StyleSheet, Text, TextInput} from 'react-native'


export default function Email(){
    return (
        <View>
            <Text style={styles.texto}>E-mail</Text>
            <TextInput style={styles.input} placeholder='Digite o seu E-mail' placeholderTextColor='#918f8f'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    texto: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        borderRadius: 5,
        backgroundColor: '#ececec',
        paddingHorizontal: 10,
        paddingVertical: 16,
        fontSize: 14,
        marginBottom: 16,
    },  
})

