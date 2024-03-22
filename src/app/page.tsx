"use client";

import { Grid, TextField, Button, Card, Box } from "@mui/material";

import Header from "@/UI/Header";
import CryptoButtons from "@/UI/CryptoButtons";
import FiatButtons from "@/UI/FiatButtons";

import { useEffect, useState } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

export default function AppPage() {
  const [cryptoInput, setCryptoInput] = useState("");
  const [fiatInput, setFiatInput] = useState("");

  return (
    <AppRouterCacheProvider>
      <Box my={1}>
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
                <FiatButtons></FiatButtons>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid container item md={3}>
                <TextField
                  onChange={(e) => setCryptoInput(e.target.value)}
                  value={cryptoInput}
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
                  onChange={(e) => setFiatInput(e.target.value)}
                  value={fiatInput}
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                />
              </Grid>
            </Grid>
            <Grid container item mb={2}>
              <Button variant="contained">Buy</Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </AppRouterCacheProvider>
  );
}
