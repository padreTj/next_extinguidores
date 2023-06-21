import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from "../assets/logopin.svg";

function MyMap() {
    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [36, 36],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    
    return (
        <MapContainer center={[32.4474289353849, -116.96741310311546]} zoom={12} scrollWheelZoom={true} style={{ height: '250px', width: '100%', zIndex: '0' }}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.4474289353849, -116.96741310311546]} icon={myIcon}>
                <Popup>
                    Extinguidores Rocha <br />
                    <a href="https://www.google.com/maps/search/?api=1&query=32.44736838927398,-116.96736005560845" target="_blank">Clic para abrir en Google Maps</a>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MyMap;

