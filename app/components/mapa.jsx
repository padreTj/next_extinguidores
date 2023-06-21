"use client"
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from "../assets/logo.svg";

function MyMap() {
    const [geoData, setGeoData] = useState({ lat: 32.4474289353849, lng: -116.96741310311546 });
    const myIcon = L.icon({
        iconUrl: logo,
        iconSize: [36, 36],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    
    return (
        <MapContainer center={[geoData.lat, geoData.lng]} zoom={12} scrollWheelZoom={true} style={{ height: '250px', width: '100%', zIndex: '0' }}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            <Marker position={[geoData.lat, geoData.lng]} icon={myIcon}>
                <Popup>
                    Extinguidores Rocha <br />
                    <a href="https://www.google.com/maps/search/?api=1&query=32.44736838927398,-116.96736005560845" target="_blank">Clic para abrir en Google Maps</a>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MyMap;

