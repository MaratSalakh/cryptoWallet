import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SvgIcon } from "@mui/material";
import usdt from "../../node_modules/cryptocurrency-icons/svg/white/eth.svg";

export default function ToggleButtons(props: {
  setSelectedFiat: Function;
  selectedFiat: string | null;
}) {
  const { setSelectedFiat, selectedFiat } = props;

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setSelectedFiat(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedFiat}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="USD" aria-label="left aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <path
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z"
              fill-rule="evenodd"
            />
          </svg>
        </SvgIcon>
      </ToggleButton>
      <ToggleButton value="EUR" aria-label="right aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <path
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 19.004h1.994C11.097 23 13.733 25 17.9 25c1.585 0 2.951-.216 4.1-.648v-2.373c-1.209.494-2.32.74-3.334.74-1.419 0-2.512-.271-3.277-.815-.766-.545-1.416-1.511-1.949-2.9h4.956l.8-2.003h-6.184c-.03-.378-.045-.806-.045-1.285 0-.416.019-.748.056-.995h7.096l.811-2.003h-7.422c.713-2.292 2.316-3.438 4.809-3.438a8.92 8.92 0 013.683.776V7.532A14.002 14.002 0 0018.103 7c-4.16 0-6.833 1.906-8.02 5.718H8.812L8 14.721h1.69a12.95 12.95 0 00-.057 1.25c0 .332.011.675.034 1.03H8.81z"
              fill-rule="evenodd"
            />
          </svg>
        </SvgIcon>
      </ToggleButton>
      <ToggleButton value="RUB" aria-label="right aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <path
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-16.762v1.808h1.764v2.608H10.5v1.705h1.764V25h1.988v-3.641h4v-1.705h-4v-2.608h2.509a7.91 7.91 0 002.26-.31c.696-.207 1.3-.52 1.814-.943.514-.421.92-.95 1.218-1.588.298-.637.447-1.386.447-2.247 0-.86-.14-1.6-.422-2.22-.282-.62-.671-1.133-1.168-1.537s-1.093-.706-1.789-.904A8.426 8.426 0 0016.811 7h-4.547v8.238zm6.31 0h-2.558v-6.43h2.559c1.142 0 2.041.25 2.695.749.654.499.982 1.3.982 2.401 0 1.102-.328 1.924-.982 2.467-.654.542-1.553.813-2.695.813z"
              fill-rule="evenodd"
            />
          </svg>
        </SvgIcon>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
