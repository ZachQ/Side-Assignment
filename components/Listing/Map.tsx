import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// This code is mostly pulled from the documentation for reach-google-maps

interface Property {
    geo: {
        lat: number;
        lng: number;
    };
    listPrice: number;
}

const containerStyle = {
    width: '100%',
    height: '100vh'
};

const center = {
    lat: 29.74406136402757,
    lng: -95.37525632113821
};

function formatNumber(number: number) {
    if (number >= 100000 && number < 100000000) {
        return (number / 100000).toFixed(0) + 'k';
    } else if (number >= 100000000) {
        return (number / 100000000).toFixed(1) + 'M';
    } else {
        return number.toString();
    }
}

// TODO: Style this with what is in wireframes or have a new svg for it
const markerIcon = {
    url: 'heart-fill.svg'
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58"
    })

    const [map, setMap] = React.useState(null)
    const [properties, setProperties] = useState([]);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    useEffect(() => {
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
            setProperties(JSON.parse(storedProperties));
        }
    }, []);

    // TODO: Update the properties as the map is interacted
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <>
                {properties.map((property: Property, index: number) => (
                    <Marker key={index} position={{ lat: property?.geo?.lat, lng: property?.geo?.lng }} label={formatNumber(property.listPrice).toString()} icon={markerIcon} />
                ))}
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)