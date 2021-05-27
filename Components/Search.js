import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

export default function Search() {
        return(
            <View style={{ marginTop: 20 }}>
                <TextInput placeholder="Film title"
                            style={ styles.textinput }/>
                <Button title="Search" onPress={() => {}}
                        style={{ height: 50 }}/>
            </View>
        )
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5, 
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    }
})