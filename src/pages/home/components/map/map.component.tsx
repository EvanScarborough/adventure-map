import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.component';
import style, { MARKER_SIZE } from './map-style';

const Map = () => {
    const lat = 39.7242;
    const lng = -104.9903;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY as string }}
                defaultCenter={{lat,lng}}
                defaultZoom={13}
                options={{
                    styles: style
                }}
                hoverDistance={MARKER_SIZE / 2}
                onDragEnd={e => console.log(e)}
            >
                <Marker lat={lat} lng={lng}/>
            </GoogleMapReact>
        </div>
    );
};

export default Map;