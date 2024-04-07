import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SvgIcon } from "@mui/material";

export default function SecondCryptoButtons(props: {
  setSelectedCrypto: Function;
  selectedCrypto: string | null;
}) {
  const { setSelectedCrypto, selectedCrypto } = props;

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setSelectedCrypto(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={selectedCrypto}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="BTC" aria-label="left aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <path
              fill-rule="evenodd"
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
            />
          </svg>
        </SvgIcon>
      </ToggleButton>
      <ToggleButton value="USDT" aria-label="right aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <path
              fill-rule="evenodd"
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"
            />
          </svg>
        </SvgIcon>
      </ToggleButton>
      <ToggleButton value="ETH" aria-label="right aligned">
        <SvgIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
            <g fill-rule="evenodd">
              <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
              <g fill-rule="nonzero">
                <path
                  fill-opacity=".298"
                  d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"
                />
                <path
                  fill-opacity=".801"
                  d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                />
                <path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
        </SvgIcon>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
