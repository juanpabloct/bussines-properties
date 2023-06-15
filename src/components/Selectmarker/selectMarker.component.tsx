import { icons } from "./SelectMarker.controller";
import { Icon } from "./selectMarker.interface";

export const SelectMarker = ({
  setIconSelected,
  iconSelected,
}: {
  setIconSelected: (value: Icon) => Icon;
  iconSelected: string;
}) => {
  return (
    <select
      className="border-2 rounded-md px-2 py-1 active:border-black focus:border-black  border-solid"
      value={iconSelected}
      onChange={({ target }) => {
        const findValue = icons.find((icon) => icon.value === target.value);
        findValue && setIconSelected(findValue);
      }}
    >
      {icons.map(({ icon, value }, i) => (
        <option value={value} key={i}>
          {icon} {value}
        </option>
      ))}
    </select>
  );
};
