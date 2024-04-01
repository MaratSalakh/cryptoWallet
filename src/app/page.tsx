"use client";

import {
  Grid,
  TextField,
  Button,
  Card,
  Box,
  IconButton,
  CardContent,
} from "@mui/material";

import Header from "@/UI/Header";
import CryptoButtons from "@/UI/CryptoButtons";
import FiatButtons from "@/UI/FiatButtons";

import { useState } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// or `v1X-appRouter` if you are using Next.js v1X

export default function AppPage() {
  const [cryptoInput, setCryptoInput] = useState("");
  const [fiatInput, setFiatInput] = useState("");
  const [orderOfInputs, setOrderOfInputs] = useState("standart");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedFiat, setSelectedFiat] = useState(null);

  const changeOrder = () => {
    if (orderOfInputs === "standart") {
      setOrderOfInputs("reverse");
      return;
    }

    setOrderOfInputs("standart");
    return;
  };

  const standartOrder = (
    <Grid item md={8}>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2} item m={1}>
            <Grid item>
              <Header></Header>
            </Grid>

            <Grid container item spacing={2} justifyContent={"space-between"}>
              <Grid item md={3}>
                <CryptoButtons></CryptoButtons>
              </Grid>
              <Grid item md={3} justifyContent={"right"}>
                <FiatButtons></FiatButtons>
              </Grid>
            </Grid>

            <Grid container item justifyContent={"space-between"}>
              <Grid item md={4}>
                <TextField
                  onChange={(e) => setCryptoInput(e.target.value)}
                  value={cryptoInput}
                  id="filled-basic"
                  label="Crypto"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={1} alignContent="center">
                <IconButton onClick={() => changeOrder()} color="primary">
                  <CurrencyExchangeIcon></CurrencyExchangeIcon>
                </IconButton>
              </Grid>
              <Grid item md={4} mr={5}>
                <TextField
                  onChange={(e) => setFiatInput(e.target.value)}
                  value={fiatInput}
                  label="Fiat"
                  id="filled-basic"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid item mb={2}>
              <Button variant="contained">Buy</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );

  const reverseOrder = (
    <Grid item md={8}>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2} item m={1}>
            <Grid item>
              <Header></Header>
            </Grid>

            <Grid container item spacing={2} justifyContent={"space-between"}>
              <Grid item md={3}>
                <FiatButtons></FiatButtons>
              </Grid>
              <Grid item md={3} justifyContent={"right"}>
                <CryptoButtons></CryptoButtons>
              </Grid>
            </Grid>

            <Grid container item justifyContent={"space-between"}>
              <Grid item md={4}>
                <TextField
                  onChange={(e) => setFiatInput(e.target.value)}
                  value={fiatInput}
                  label="Fiat"
                  id="filled-basic"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={1} alignContent="center">
                <IconButton onClick={() => changeOrder()} color="primary">
                  <CurrencyExchangeIcon></CurrencyExchangeIcon>
                </IconButton>
              </Grid>
              <Grid item md={4} mr={5}>
                <TextField
                  onChange={(e) => setCryptoInput(e.target.value)}
                  value={cryptoInput}
                  id="filled-basic"
                  label="Crypto"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid item mb={2}>
              <Button variant="contained">Buy</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <AppRouterCacheProvider>
      <Box m={2}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField id="filled-basic" label="Address" variant="outlined" />
          </Grid>
          {orderOfInputs === "standart" ? standartOrder : reverseOrder}
        </Grid>
      </Box>
    </AppRouterCacheProvider>
  );
}
