  import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
  import React, { Component } from 'react';

  const mapStyles = {
    width: '100%',
    height: '500px',
  }
 
  export class maps extends Component {
    abortController = new AbortController()

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    componentWillMount() {
      this.abortController.abort()
    }

    render() {
      return (
        <Map google={this.props.google} zoom={18} style={mapStyles} initialCenter={{
            lat: -7.532982,
            lng: 110.825290
          }} onClick={this.onMapClicked} >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Meezu Headquarters'} />
   
        <InfoWindow
          onOpen={this.windowHasOpened}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: process.env.GATSBY_GMAPS_API_KEY || ''
  })(maps)
