import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useRouter, usePathname } from "next/navigation";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const { push } = useRouter();
  const pathname = usePathname();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const selectBuy = pathname === "/" ? true : false;
  const selectExchange = pathname === "/exchange" ? true : false;

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        selected={selectBuy}
        onClick={() => push("/")}
        value="left"
        aria-label="left aligned"
      >
        Fast Buy
      </ToggleButton>
      <ToggleButton
        selected={selectExchange}
        onClick={() => push("/exchange")}
        value="right"
        aria-label="right aligned"
      >
        Fast Exchange
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
