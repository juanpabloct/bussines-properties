import { Select } from "../../tw-component/select";
import { icons } from "./SelectMarker.controller";
import { Icon } from "./selectMarker.interface";

export const SelectMarker = ({
  setIconSelected,
  iconSelected,
}: {
  setIconSelected: (value: Icon) => Icon;
  iconSelected: Icon;
}) => {
  const allIcons = icons();
  return (
    <Select
      value={iconSelected.value}
      onChange={({ target }) => {
        const findValue = allIcons.find((icon) => icon.value === target.value);
        findValue && setIconSelected(findValue);
      }}
    >
      {allIcons.map(({ icon, value }, i) => (
        <option value={value} key={i}>
          {value}
        </option>
      ))}
    </Select>
  );
};
