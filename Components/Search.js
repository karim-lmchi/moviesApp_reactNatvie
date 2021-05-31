import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList,Text } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/theMovieDataBaseApi';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films: [],
        }
        this.searchedText = ''
    }

    _loadFilms() {
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({ films: data.results }));
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text;
    }

    render() {
        return(
        <View style={ styles.main_container }>
            <TextInput placeholder="Film title"
                       style={ styles.textinput }
                       onChangeText={(text) => this._searchTextInputChanged(text)}/>
            <Button title="Search" 
                    onPress={() => this._loadFilms()}
                    style={{ height: 50 }}/>
            <FlatList data={ this.state.films }
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