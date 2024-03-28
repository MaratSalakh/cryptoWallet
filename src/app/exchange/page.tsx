"use client";

import { Grid, TextField, Button, Card, Box } from "@mui/material";

import Header from "@/UI/Header";
import CryptoButtons from "@/UI/CryptoButtons";

import { useState } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

export default function ExchangePage(props: any) {
  const [InputFrom, setInputFrom] = useState("");
  const [InputTo, setInputTo] = useState("");

  return (
    <AppRouterCacheProvider>
      <Box my={2}>
        <Grid container spacing={2}>
          <Grid container item>
            <Grid container item>
              <TextField id="filled-basic" label="Address" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container item>
            <Card variant="outlined">
              <Grid container spacing={2} m={1}>
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
                      variant="outlined"
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
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container item mb={2}>
                  <Button variant="contained">Exchange</Button>
                </Grid>
              </Grid>
              {props.children}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AppRouterCacheProvider>
  );
}
