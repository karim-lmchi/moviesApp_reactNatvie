import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList,Text } from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/theMovieDataBaseApi';

class Search extends React.Component {

    constructor(props) {
        super(props)
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText('star').then(data => console.log(data));
    };

        render() {
            return(
            <View style={ styles.main_container }>
                <TextInput placeholder="Film title"
                            style={ styles.textinput }/>
                <Button title="Search" onPress={() => {}}
                        style={{ height: 50 }}/>
                <FlatList data={ films }
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({item}) => <FilmItem film={item}/>}/>
            </View>
            )
        }
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

export default Search;