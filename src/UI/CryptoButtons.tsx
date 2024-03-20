import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="BTC" aria-label="left aligned">
        BTC
      </ToggleButton>
      <ToggleButton value="USDT" aria-label="right aligned">
        USDT
      </ToggleButton>
      <ToggleButton value="ETH" aria-label="right aligned">
        ETH
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
