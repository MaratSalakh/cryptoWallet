"use client";

import { Grid, TextField, Button } from "@mui/material";

import Header from "@/UI/Header";
import CryptoButtons from "@/UI/CryptoButtons";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

export default function ExchangePage(props: any) {
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
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Grid>
              <Grid container item md={1}>
                =
              </Grid>
              <Grid container item md={3} direction={"row-reverse"}>
                <TextField id="filled-basic" label="Filled" variant="filled" />
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
