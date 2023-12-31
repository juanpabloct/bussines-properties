import { useCallback, useEffect, useState } from "react";
import { Icon } from "./Selectmarker/selectMarker.interface";
import { userId } from "../../../config";
import { conectBack } from "../../conection/conection";
import {
  CreateMarketPoint,
  Point,
} from "../../interfaces/createMarketPoint.interface";
import { ResultMarketPoint } from "../../interfaces/resultMarketPoint";
import "leaflet/dist/leaflet.css";
import { Mapa } from "./mapa.component";
import { Loading } from "../loading/loading";

export const InfoMapa = ({ iconSelected }: { iconSelected: Icon }) => {
  const [pounts, setPounts] = useState<ResultMarketPoint[]>([]);
  const [loadingPounts, setLoadingPounts] = useState(false);
  const id = localStorage.getItem(userId);
  useEffect(() => {
    const allData = async () => {
      setLoadingPounts(true);
      try {
        const { data } = await conectBack.get(`/marked-point/user/${id}`);
        setPounts(data);
      } catch (error) {
        console.log();
      }
      setLoadingPounts(false);
    };
    allData();
  }, [id]);

  const removePount = useCallback(
    async (id: number) => {
      try {
        await conectBack.delete<CreateMarketPoint>(`/marked-point/${id}`);
        const copyPounts = [...pounts];
        const filterPount = copyPounts.filter((pount) => !(pount.id === id));
        setPounts(filterPount);
      } catch (error) {
        console.log("No se pudo borrarS");
      }
    },
    [pounts]
  );

  const mapClik = useCallback(
    async (e: Point) => {
      const { value } = iconSelected;
      try {
        const { data } = await conectBack.post<CreateMarketPoint>(
          `/marked-point/${id}`,
          {
            namePoint: value,
            point: { ...e },
          }
        );
        setPounts((current) => [...current, data]);
      } catch (error) {
        console.log(error);
      }
    },
    [iconSelected, id]
  );

  return pounts.length > 0 || !loadingPounts ? (
    <Mapa pounts={pounts} createMarked={mapClik} removePount={removePount} />
  ) : (
    <Loading />
  );
};
