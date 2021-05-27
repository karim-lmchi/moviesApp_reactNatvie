import React from 'react';
import { View, Button, TextInput } from 'react-native';

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

const styles = {
    textinput: {
        marginLeft: 5, 
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    }
}