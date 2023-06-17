import { Icon } from "./Selectmarker/selectMarker.interface";
import { ResultMarketPoint } from "../../interfaces/resultMarketPoint";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { icons } from "./Selectmarker/SelectMarker.controller";
import { renderToString } from "react-dom/server";
import { Point } from "../../interfaces/createMarketPoint.interface";
const center = {
  lat: 51.505,
  lng: -0.09,
};
export const Mapa = ({
  pounts,
  createMarked,
  removePount,
}: {
  pounts: ResultMarketPoint[];
  createMarked: (e: Point) => Promise<void>;
  removePount: (id: number) => Promise<void>;
}) => {
  const AddMarkerOnClick = () => {
    useMapEvents({
      dblclick: (e) => {
        const { lat, lng } = e.latlng;
        const newMarker = {
          lat,
          lng,
        };
        createMarked(newMarker);
      },
    });

    return null;
  };
  const allIcons = icons();
  return (
    <MapContainer center={center} zoom={2} minZoom={2} doubleClickZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <AddMarkerOnClick />
      {pounts.map(({ point, id, namePoint }) => {
        const icon = allIcons.filter((icon) => icon.value === namePoint);

        const iconMarket = L.divIcon({
          className: "custom-icon",
          html: renderToString(
            <span className="text-xl">{icon[0]?.icon}</span>
          ),
          shadowSize: [40, 40],
        });

        return (
          <Marker
            key={id}
            position={[point.lat, point.lng]}
            icon={iconMarket}
            eventHandlers={{
              dblclick: () => {
                removePount(id);
              },
              click: (e) => {
                console.log(e);
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
};
