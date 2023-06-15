import "mapbox-gl/dist/mapbox-gl.css";
import { MapLayerMouseEvent } from "mapbox-gl";
import { ReactNode, useCallback, useState } from "react";
import { Marker, Map as ReactMapGL, NavigationControl } from "react-map-gl";
import { Icon } from "../Selectmarker/selectMarker.interface";
import { VITE_TOKEN_MAPBOX } from "../../../config";

interface Pounts {
  value: string;
  element: ReactNode;
  lng: number;
  lat: number;
}

export const Map = ({ iconSelected }: { iconSelected: Icon }) => {
  const [pounts, setPounts] = useState<Pounts[]>([]);
  console.log(pounts);

  const [clickPount, setClickPount] = useState(false);
  const [loadingPounts, setLoadingPounts] = useState(false);
  const mapClik = useCallback(
    (e: MapLayerMouseEvent) => {
      const { value, icon } = iconSelected;
      !clickPount
        ? setPounts((current) => [
            ...current,
            {
              lat: e.lngLat.lat,
              lng: e.lngLat.lng,
              value: value,
              element: icon,
            },
          ])
        : setClickPount(false);
      setLoadingPounts(false);
    },
    [clickPount, iconSelected]
  );
  const removePount = (lat: number, lng: number) => {
    setClickPount(true);
    setLoadingPounts(true);
    const copyPounts = [...pounts];
    const filterPount = copyPounts.filter(
      (pount) => !(pount.lat === lat && pount.lng === lng)
    );
    setPounts(filterPount);
  };

  return (
    <ReactMapGL
      mapboxAccessToken={VITE_TOKEN_MAPBOX}
      initialViewState={{
        zoom: 1.2,
      }}
      style={{ width: "100%", height: "40rem" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={mapClik}
    >
      <NavigationControl />
      {!loadingPounts &&
        pounts.map(({ lat, lng, element }, i) => (
          <Marker
            key={i}
            latitude={lat}
            longitude={lng}
            onClick={() => removePount(lat, lng)}
          >
            {element}
          </Marker>
        ))}
    </ReactMapGL>
  );
};
