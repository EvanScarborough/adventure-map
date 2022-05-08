import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../../home/components/map/marker.component';
import style, { MARKER_SIZE } from '../../../home/components/map/map-style';
import { ConfirmMapHolder } from '../../new-adventure.styled';
import { SectionHeader } from '../../../../components/typography.styled';

interface ConfirmMapProps {
    lat: number,
    lng: number
};
const ConfirmMap = ({ lat, lng }: ConfirmMapProps) => {
    return (
        <>
            <SectionHeader>Is this correct?</SectionHeader>
            <ConfirmMapHolder>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY as string }}
                    defaultCenter={{lat,lng}}
                    center={{lat,lng}}
                    defaultZoom={16}
                    options={{
                        styles: style
                    }}
                    hoverDistance={MARKER_SIZE / 2}
                    draggable={false}
                >
                    <Marker lat={lat} lng={lng} disableHover />
                </GoogleMapReact>
            </ConfirmMapHolder>
        </>
    );
};

export default ConfirmMap;