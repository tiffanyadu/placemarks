import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

// Declare a constant for the Google Places API
const google = window.google;

class Search extends Component {
  constructor() {
    super();
    // Bind on SuggestSelect to the <Search component
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }
  // Create an onSuggestSelect callback passing label (place name) and location (place coordinates) from the suggest parameter.
  // Pass label and location to the setLocation callback on the <App> component via the onSuggest prop
  // Clear input after selecting suggest
  onSuggestSelect({ label, location }) {
    this.props.onSuggest(label, location);
    this._geoSuggest.clear();
  }
  render() {
    // Set default places to suggest
    const fixtures = [
      {label: 'Chicago, IL, United States', location: {lat: 41.8781136, lng: -87.62979819999998}},
      {label: 'San Francisco, CA, United States', location: {lat: 37.7749295, lng: -122.41941550000001}},
      {label: 'New York, NY, United States', location: {lat: 40.7127837, lng: -74.00594130000002}}
    ];

    return (
      // Render <Geosuggest>
      // Pass default places to Geosuggest
      // Pass the onSuggest callback to Geosuggest
      // Set the default location for the Google Places API
      <Geosuggest
        ref={el=>this._geoSuggest=el}
        placeholder="Enter a place"
        initialValue=""
        fixtures={fixtures}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(-4.05, 39.666667)}
        radius="20" />
    );
  }
}

export default Search;
// ```javascript