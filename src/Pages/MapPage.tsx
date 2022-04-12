import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css'

export interface MapPageProps {}

const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD3pDuCBbERaMRxepuCrTsa-rt5-F11G2w"
    });

    const position = {lat: -23.555470, lng: -46.635746}

  return <div className="map">
      {
        isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={position}
              zoom={15}
            >
                <Marker position={position} />
            </GoogleMap>
        ) : <></>
      }
  </div>;
};

export default MapPage;
