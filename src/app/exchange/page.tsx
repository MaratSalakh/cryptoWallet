"use client";

import { Grid, TextField, Button } from "@mui/material";

import Header from "@/UI/Header";
import CryptoButtons from "@/UI/CryptoButtons";

import { useState } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

export default function ExchangePage(props: any) {
  const [InputFrom, setInputFrom] = useState("");
  const [InputTo, setInputTo] = useState("");

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Grid container spacing={2}>
            <Grid container item md={12}>
              <Header></Header>
            </Grid>
            <Grid container item spacing={2}>
              <Grid container item md={4}>
                <CryptoButtons></CryptoButtons>
              </Grid>
              <Grid container item md={3} direction={"row-reverse"}>
                <CryptoButtons></CryptoButtons>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid container item md={3}>
                <TextField
                  onChange={(e) => setInputFrom(e.target.value)}
                  value={InputFrom}
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                />
              </Grid>
              <Grid container item md={1}>
                =
              </Grid>
              <Grid container item md={3} direction={"row-reverse"}>
                <TextField
                  onChange={(e) => setInputTo(e.target.value)}
                  value={InputTo}
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Button variant="contained">Buy</Button>
            </Grid>
          </Grid>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
