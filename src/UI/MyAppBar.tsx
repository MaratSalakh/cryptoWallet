"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
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
