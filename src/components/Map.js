import React from 'react';
import {Gmaps, Marker, Circle} from 'react-gmaps';

// Declare a params constant to send to the Google Places API
const params = {
  v: '3.exp',
  key: process.env.AIzaSyAc_S5fCVTR5Zu66izjAwbtRmm_g4nb6yI
};

// Create a stateless functional <Map> component passing in lat and lng props
// Render <Gmaps> passing lat, lng coords, and params to connect to the Google Places API
const Map = ({lat, lng}) =>
  <Gmaps
    className="Map"
    width={'600px'}
    height={'400px'}
    lat={lat}
    lng={lng}
    zoom={12}
    loadingMessage={'Don\'t worry, be happy'}
    params={params}>
    <Marker
      lat={lat}
      lng={lng}
      draggable={true} />
    <Circle
      lat={lat}
      lng={lng}
      radius={500} />
  </Gmaps>

  export default Map;