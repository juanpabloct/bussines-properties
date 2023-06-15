import tw from "tailwind-styled-components";

interface FlexProps {
  $col?: boolean;
}

export const Flex = tw.div<FlexProps>`
    ${(props) => (props.$col ? "flex-col" : "flex-row")}
    flex
    w-full
  `;
