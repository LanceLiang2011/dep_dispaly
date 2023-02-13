import CheckboxesTags from "../../components/CheckboxesTags.component";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "./Map.component";

const HelpsNearMe = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_CUSTOM_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent />;
};

export default HelpsNearMe;
