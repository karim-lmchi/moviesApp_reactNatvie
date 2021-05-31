import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList,Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/theMovieDataBaseApi';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films: [],
            isLoading: false,
        }
        this.searchedText = ''
    }

    _loadFilms() {
        this.setState({ isLoading: true });
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText)
                .then(data => this.setState({ films: data.results, isLoading: false }));
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return(
                <View style={styles.loading_container}>
                     {/* ActivityIndicator is a reactNative component (see documentation) */}
                    <ActivityIndicator size='large'/>
                </View>
            )
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
                       onChangeText={(text) => this._searchTextInputChanged(text)}
                       // allows, once the button enter is clicked, to load the films list
                       // now, it's not mandatory to click on search button to have the films list
                       onSubmitEditing={() => this._loadFilms()}/>
            <Button title="Search" 
                    onPress={() => this._loadFilms()}
                    style={{ height: 50 }}/>
            <FlatList data={ this.state.films }
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) => <FilmItem film={item}/>}/>
            {this._displayLoading()}
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
    },

    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Search;