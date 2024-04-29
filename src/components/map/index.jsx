/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TrackingMap = ({ data: { data } }) => {
    const { locations, route_data, containers } = data;
    const position = [route_data.pin[0], route_data.pin[1]];
    const currentLocation = containers[0].events.find((event) => event.event_code === 'DISC');
    const containerPosition = [locations[currentLocation.location - 1].lat, locations[currentLocation.location - 1].lng];

    return (
        <MapContainer center={position} zoom={5} style={{ height: '600px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
                <Marker key={location.id} position={[location.lat, location.lng]}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
            <Polyline pathOptions={{ color: 'blue' }} positions={route_data.route.map(route => {
                return route.path.map(([lat, lng]) => [lat, lng])
            })
            } />
            <Marker position={containerPosition}>
                <Popup>Konteynerin Şu Anki Konumu</Popup>
            </Marker>

        </MapContainer>
    );
};

export { TrackingMap };