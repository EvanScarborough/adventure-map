import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.component';
import style, { MARKER_SIZE } from './map-style';
import { Location } from '../../../../types/location';

interface MapProps {
    locations:Location[]
};
const Map = ({ locations }: MapProps) => {
    const lat = 39.7242;
    const lng = -104.9903;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY as string }}
                defaultCenter={{lat,lng}}
                defaultZoom={13}
                options={{
                    styles: style,
                    fullscreenControl: false
                }}
                hoverDistance={MARKER_SIZE / 2}
                onDragEnd={e => console.log(e)}
            >
                {locations.map(l => <Marker key={l.locationId} lat={l.latitude} lng={l.longitude} location={l}/>)}
            </GoogleMapReact>
        </div>
    );
};

export default Map;