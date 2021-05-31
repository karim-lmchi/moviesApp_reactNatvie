import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList,Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/theMovieDataBaseApi';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = '';
        this.page = 0;
        this.totalPages = 0;
        this.state = { 
            films: [],
            isLoading: false,
        }
    }

    _loadFilms() {
        this.setState({ isLoading: true });
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1)
                .then(data => {
                    this.page = data.page
                    this.totalPages = data.total_pages
                    this.setState({ 
                        // We concatenate so as not to overwrite the films already present in the table when loading the other films
                        films: [...this.state.films, ...data.results], 
                        isLoading: false 
                    })
                });
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
                      renderItem={({item}) => <FilmItem film={item}/>}
                      // onEndReachedThreshold called when the scroll position is at the half of the page
                      // by default, its value is 1 for all of the page
                      onEndReachedThreshold={0.5}
                      // onEndReached called when we are at the half of the page
                      onEndReached={() => {
                          if(this.page < this.totalPages) {
                              this._loadFilms()
                          }
                      }}/>
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