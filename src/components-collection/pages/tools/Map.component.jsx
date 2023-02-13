import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";

const MapComponent = () => {
  const mapRef = useRef();

  const [selectedClinic, setSelectedClinic] = useState(null);
  const [clinics, setClinics] = useState([]);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  const handleMarkerClick = (clinic) => {
    setSelectedClinic(clinic);
  };

  const handleCardClick = (clinic) => {
    setSelectedClinic(clinic);
  };

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  return (
    <div className="container">
      <div className="controls">
        <div>Place Holder</div>
      </div>
      <div className="map">
        <GoogleMap
          zoom={12}
          center={location}
          mapContainerClassName="map-container"
          options={options}
        ></GoogleMap>
      </div>
    </div>
  );
};

export default MapComponent;
