/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { iconPerson } from './icon';

const TrackingMap = ({ data: { data } }) => {
    const { locations, route_data } = data;
    const position = [route_data.pin[0], route_data.pin[1]];
    const mapRef = useRef(null);

    const focusOnMarker = (markerPosition) => {
        mapRef.current.flyTo(markerPosition, 15, {
            duration: 2,
            easeLinearity: 0.5,
        });
    }
    return (
        <MapContainer ref={mapRef} center={position} zoom={5} style={{ height: '600px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={[location.lat, location.lng]}
                    icon={iconPerson}
                    onClick={() => focusOnMarker([location.lat, location.lng])} // Marker'a tıklandığında odaklan
                >
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
            <Polyline
                pathOptions={{ color: 'blue' }}
                positions={route_data.route.map(route => route.path.map(([lat, lng]) => [lat, lng]))}
            />
        </MapContainer>
    );
};


export { TrackingMap };
