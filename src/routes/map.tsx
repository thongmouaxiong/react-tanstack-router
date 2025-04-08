import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@heroui/react";

export const Route = createFileRoute("/map")({
  component: MapComponent,
});

function MapComponent() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        console.log("point", e);
        
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  const saveLocation = async () => {
    if (!position) return;
    // await fetch("http://localhost:5000/api/locations", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ latitude: position[0], longitude: position[1] }),
    // });
    alert("Location saved!");
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("current point", pos);
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          alert("Error getting location: " + err.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <MapContainer
        center={[25, 55]}
        zoom={5}
        className="w-full h-96 rounded-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        {position && <Marker position={position} />}
      </MapContainer>
      <div className="flex gap-2">
        <Button onPress={getCurrentLocation}>Use My Location</Button>
        <Button onPress={saveLocation} disabled={!position}>
          Save Location
        </Button>
      </div>
    </div>
  );
}
