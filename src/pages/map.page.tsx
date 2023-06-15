import { FC, useState } from "react";
import { Icon } from "../components/Selectmarker/selectMarker.interface";
import { SelectMarker } from "../components/Selectmarker/selectMarker.component";
import { icons } from "../components/Selectmarker/SelectMarker.controller";
import { Map } from "../components/mapa/mapa.component";
import { Flex } from "../components/tw-component";
const HomePage: FC = () => {
  const [iconSelected, setIconSelected] = useState(icons[0]);
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
            iconSelected={iconSelected.value}
          />
        </div>
        <Map iconSelected={iconSelected} />
      </Flex>
    </Flex>
  );
};
export default HomePage;
