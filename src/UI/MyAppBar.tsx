"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";

import {
  connect,
  disconnect,
  getAccount,
  getBalance,
  type GetBalanceReturnType,
} from "@wagmi/core";
import { injected } from "@wagmi/connectors";
import { config } from "../../config";
import { Address } from "viem";
import { bsc, mainnet } from "viem/chains";
import { CssBaseline, SvgIcon } from "@mui/material";

export default function MyAppBar() {
  const [account, setAccount] = useState<Address>();
  const [balance, setBalance] = useState<GetBalanceReturnType>();
  const [chain, setChain] = useState("eth");

  const connectToETH = async () => {
    try {
      await connect(config, { connector: injected(), chainId: mainnet.id });
      const address = await getAccount(config).address;
      await setAccount(address);
      let balance;
      if (address !== undefined) {
        balance = await getBalance(config, {
          address: address,
        });
      }
      await setBalance(balance);
    } catch (e) {
      console.log(e);
    }
  };

  const connectToBSC = async () => {
    try {
      await connect(config, { connector: injected(), chainId: bsc.id });
      const address = await getAccount(config).address;
      await setAccount(address);
      let balance;
      if (address !== undefined) {
        balance = await getBalance(config, {
          address: address,
        });
      }
      await setBalance(balance);
    } catch (e) {
      console.log(e);
    }
  };

  const disconnectFromWallet = async () => {
    try {
      const { connector } = getAccount(config);
      const result = await disconnect(config, { connector });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline></CssBaseline>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
                  <g fill-rule="nonzero">
                    <path fill-opacity=".5" d="M16.498 4v8.87l7.497 3.35z" />
                    <path opacity=".8" d="M16.498 4L9 16.22l7.498-3.35z" />
                    <path
                      fill-opacity=".5"
                      d="M16.498 21.968v6.027L24 17.616z"
                    />
                    <path opacity=".796" d="M16.498 27.995v-6.028L9 17.616z" />
                    <path fill-opacity=".5" d="M9 16.22l7.498 4.353v-7.701z" />
                  </g>
                </g>
              </svg>
            </SvgIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {account}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`${balance?.value} ${balance?.symbol}`}
          </Typography>
          <Button color="inherit" onClick={() => connectToETH()}>
            Connect to ETH
          </Button>
          <Button color="inherit" onClick={() => connectToBSC()}>
            Connect to BSC
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
