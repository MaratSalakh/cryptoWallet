import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Address } from "viem";
import { type GetBalanceReturnType } from "@wagmi/core";
import { Typography } from "@mui/material";

export default function TemporaryDrawer(props: {
  account: Address | undefined;
  balance: GetBalanceReturnType | undefined;
  setOpenDrawer: Function;
  openDrawer: boolean;
}) {
  const { setOpenDrawer, openDrawer, account, balance } = props;

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
                  {account}
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
                  {`${balance?.value === undefined ? "" : balance?.value}`}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
