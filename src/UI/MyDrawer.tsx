import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { Address } from "viem";
import { type GetBalanceReturnType } from "@wagmi/core";
import { Typography } from "@mui/material";

export default function TemporaryDrawer(props: {
  account: Address | undefined;
  balance: GetBalanceReturnType | undefined;
  setOpenDrawer: Function;
  openDrawer: boolean;
  connectToETH: Function;
  connectToBNB: Function;
}) {
  const {
    setOpenDrawer,
    openDrawer,
    account,
    balance,
    connectToETH,
    connectToBNB,
  } = props;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem alignItems="flex-start" key={"walletAdress1"}>
          <ListItemText
            primary={"Wallet adress"}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline", overflowWrap: "break-word" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {account === undefined ? "not connect" : account}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"balance"}>
          <ListItemText
            primary={"Balance"}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline", overflowWrap: "break-word" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {`${
                    balance?.value === undefined
                      ? "not connect"
                      : balance?.value
                  } ${balance?.symbol === undefined ? "" : balance?.symbol}`}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => connectToETH()}>
            <ListItemText primary="Connect to ETH" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => connectToBNB()}>
            <ListItemText primary="Connect to BNB" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
