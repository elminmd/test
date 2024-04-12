import L from 'leaflet';
import markerLocation from "../../assets/icons/marker-location-icon.svg";
const iconPerson = new L.Icon({
    iconUrl: markerLocation,
    iconRetinaUrl: markerLocation,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
    className: 'leaflet-div-icon'
});

export { iconPerson };