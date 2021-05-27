import React from 'react';
import { View, Button, TextInput } from 'react-native';

export default function Search() {
        return(
            <View>
                <TextInput placeholder="Film title"/>
                <Button title="Search" onPress={() => {}}/>
            </View>
        )
}