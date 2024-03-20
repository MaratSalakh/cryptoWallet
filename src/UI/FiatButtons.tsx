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
      <ToggleButton value="USD" aria-label="left aligned">
        USD
      </ToggleButton>
      <ToggleButton value="EUR" aria-label="right aligned">
        EUR
      </ToggleButton>
      <ToggleButton value="RU" aria-label="right aligned">
        RU
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
