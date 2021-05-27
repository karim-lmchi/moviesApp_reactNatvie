import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList,Text } from 'react-native';
import films from '../Helpers/filmsData';

export default function Search() {
        return(
            <View style={ styles.main_container }>
                <TextInput placeholder="Film title"
                            style={ styles.textinput }/>
                <Button title="Search" onPress={() => {}}
                        style={{ height: 50 }}/>
                <FlatList data={ films }
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({item}) => <Text>{ item.title }</Text>}/>
            </View>
        )
}

const styles = StyleSheet.create({
    main_container: { 
        marginTop: 20, 
        flex: 1,
    },

    textinput: {
        marginLeft: 5, 
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    }
})