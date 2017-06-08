import React, { Component } from 'react';
import Search from './components/Search';
import Map from './components/Map';
import CurrentPlace from './components/CurrentPlace';
import Placemarks from './components/Placemarks';

import './App.css';
import 'react-bootstrap';
import 'css-type-base';

class App extends Component {
  constructor() {
    super();
    // Set initial state values for <App>
    this.state = {
      favorites: this.setFavorites(),
      currentPlace: 'Chicago, IL, United States',
      coords: {
        lat: 41.8781136,
        lng: -87.62979819999998
      }
    };
    // Bind setLocation to the <App> component
    this.setLocation = this.setLocation.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  // Set initial state of favorites
  setFavorites() {
    let favorites = [];
    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }
    return favorites;
  }

  // Create setLocation callback and setState with place and coords parameters
  setLocation(place, coords) {
    this.setState({
      currentPlace: place,
      coords: coords
    });
  }

  // Toggle favorite place
  toggleFavorite(place) {
    const { coords } = this.state;
    if (this.isFavorite(place)) {
      this.removeFavorite(place);
    } else {
      this.addFavorite(place, coords);
    }
  }

  // Remove favorite place from localStorage
  removeFavorite(place) {
    const favorites = this.state.favorites;
    let index = -1;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].place === place) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      favorites.splice(index, 1);
      this.setState({
        favorites: favorites
      });
      console.log('Remove', favorites);
      localStorage.favorites = JSON.stringify(favorites);
    }
  }

  // Add favorite place with coords to localStorage
  addFavorite(place, coords) {
    const favorites = this.state.favorites;
    favorites.push({
      place: place,
      coords: coords,
      timestamp: Date.now()
    });
    console.log('Set state', favorites);
    this.setState({
      favorites: favorites
    });
    console.log('Add favorite', favorites);
    localStorage.favorites = JSON.stringify(favorites);
  }

  // Check if place is a favorite
  isFavorite(place) {
    const favorites = this.state.favorites;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].place === place) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { currentPlace, coords, favorites } = this.state;
    const { lat, lng } = coords;
    const isFavorite = this.isFavorite(currentPlace);

    return (
      <div className="App">
        <h1 className ="heading">Placemarks</h1>
        <Search onSuggest={this.setLocation} />
        <Map lat={lat} lng={lng} />
        <CurrentPlace
          currentPlace={currentPlace}
          coords={coords} onFavoriteToggle={this.toggleFavorite} favorite={isFavorite} />
        <Placemarks favorites={favorites} activePlace={currentPlace} onClick={this.setLocation} />
      </div>
    );
  }
}

export default App;
