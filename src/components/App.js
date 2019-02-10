import React, { Component } from 'react';
import './App.css';

import {
    Container,
} from 'reactstrap';

import { Tabs } from './Tabs';
import { Favorites } from './Favorites';
import { Search } from './Search';

import { gifs } from '../gifs';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(gifs)
    this.state = {
        tabNames: ["Search", "Favorites"],
        activeIndex: 0,
        search: [],
        favorites: [],
    }
  }

  componentDidMount() {
    this.setState({
        search: gifs,
    });
  }

  toggleTabIndex = index => {
    this.setState({
        activeIndex: index,
    })
  }

  toggleFav = index => {
        const {favorites, search} = this.state;

        favorites.push(search[index]);
        this.setState({
            favorites, 
        })
  }

  removeFav = index => {
    const {favorites, search} = this.state;

    this.setState({
        favorites: favorites.slice(0, index).concat(favorites.slice(index+1)),
    })
  }

  render() {
    const {tabNames, activeIndex} = this.state
    return <Container>
        <br/>
        <br/>

        <Tabs tabNames={tabNames}
            onClick={this.toggleTabIndex}
            activeIndex={activeIndex} />

        {activeIndex === 0 ?
            <Search data={this.state.search} click={this.toggleFav}/> :
            <Favorites data={this.state.favorites} click={this.removeFav} />}
    </Container>
  }
}

export default App;
