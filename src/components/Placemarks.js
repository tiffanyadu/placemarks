import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Placemark from './Placemark';

// Get the favorites, onClick, and activePlace props from <App>
const Placemarks = ({ favorites, onClick, activePlace }) => {
  favorites = favorites.map(fav => {
    // Get timestamp for each favorite
    // Set isActive (boolean) if the favorite place is active
    const { timestamp } = fav;
    const isActive = activePlace === fav.place;

    // Render each <Placemark> passing in a timestamp, favorite place, isActive, and the onClick event listener (with the setLocation callback) prop from <App>
    return (
      <Placemark key={timestamp} favorite={fav} timestamp={timestamp} active={isActive} onClick={onClick}></Placemark>
    );
  });

  // Render <ListGroup> with the favorites list
  return (
    <ListGroup className="placemarks">
      {favorites}
    </ListGroup>
  );
}

export default Placemarks;