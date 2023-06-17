import { FC, memo, useState } from "react";
import { Icon } from "../components/mapa/Selectmarker/selectMarker.interface";
import { SelectMarker } from "../components/mapa/Selectmarker/selectMarker.component";
import { icons } from "../components/mapa/Selectmarker/SelectMarker.controller";
import { Flex } from "../components/tw-component";
import { InfoMapa } from "../components/mapa/infoMapa.component";
const HomePage: FC = memo(() => {
  const [iconSelected, setIconSelected] = useState(icons()[0]);
  const changeIcon = (value: Icon) => {
    setIconSelected(value);
    return value;
  };

  return (
    <Flex $col={true} className="card min-h-screen justify-center items-center">
      <Flex $col className=" justify-start w-3/4 ">
        <div className="w-1/6">
          <SelectMarker
            setIconSelected={changeIcon}
            iconSelected={iconSelected}
          />
        </div>
        <InfoMapa iconSelected={iconSelected} />
      </Flex>
    </Flex>
  );
});
export default HomePage;
