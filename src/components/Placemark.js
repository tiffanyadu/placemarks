import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import moment from 'moment';
import '../App.css';

class Placemark extends Component {
  constructor() {
    super();
    // Bind handleClick to the <Placemark> this context
    this.handleClick = this.handleClick.bind(this);
  }

  // Pass place and coords to the onClick prop on <Placemarks> (the parent to <Placemark>)
  handleClick() {
    const { place, coords } = this.props.favorite;
    this.props.onClick(place, coords);
  }

  render() {
    // Get favorite and timestamp from props
    const { favorite, timestamp } = this.props;
    // Set initial className for <Placemark>
    let placeClassName = 'placemark';
    // Append the active class to <Placemark> when the instance onClick listener fires
    if (this.props.active) {
      placeClassName += ' active';
    }

    return (
      // Render ListGroupItem passing in the placeClassName class, the handleClick callback, and the favorite place
      // Render how long ago the place was added passing timestamp to moment
      <ListGroupItem className={placeClassName} onClick={this.handleClick}>
        {favorite.place}
        <span className="createdAt">
          {moment(timestamp).fromNow()}
        </span>
      </ListGroupItem>
    );
  }
}

export default Placemark;