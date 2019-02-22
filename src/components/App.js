import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import {
    Container,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { Tabs } from './Tabs';
import { Favorites } from './Favorites';
import { Search } from './Search';

import { gifs } from '../gifs';

const StupidComponent = () => <h1>Hello, Wrold!</h1>

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
    const favs = localStorage.getItem('favs') || '';
    this.setState({
        search: gifs,
        favorites: favs.split(','),
        activeIndex: parseInt(localStorage.getItem('activeIndex'), 10) || 0,
    });
  }

  toggleTabIndex = index => {
    localStorage.setItem('activeIndex', index)
    this.setState({
        activeIndex: index,
    })
  }

  toggleFav = index => {
        const {favorites, search} = this.state;

        if (favorites.filter(fav => fav === search[index]).length) return;

        favorites.push(search[index]);
        localStorage.setItem('favs', favorites.join(','))
        this.setState({
            favorites, 
        })
  }

  removeFav = index => {
    const {favorites, search} = this.state;

    const newFavs = favorites.slice(0, index).concat(favorites.slice(index+1))
    localStorage.setItem('favs', newFavs.join(','))
    this.setState({
        favorites: newFavs,
    })

  }

  render() {
    const {tabNames, activeIndex} = this.state

    return <Container>
        <Nav tabs>
            <NavItem onClick={() => this.toggleTabIndex(0)} className={activeIndex === 0 ? "active" : ""}>
                <Link to="/search">Search</Link>
            </NavItem>

            <NavItem onClick={() => this.toggleTabIndex(1)} className={activeIndex === 1 ? "active" : ""}>
                <Link to="/favorites">Favroties</Link>
            </NavItem>
        </Nav>

        <br/>
        <br/>

        <Route path='/search' render={() => <Search data={this.state.search} click={this.toggleFav}/>} />
        <Route path='/favorites' render={() => <Favorites data={this.state.favorites} click={this.removeFav} />} />

    </Container>
  }
}

export default App;
