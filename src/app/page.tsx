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

import { useEffect, useState } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// or `v1X-appRouter` if you are using Next.js v1X

export default function AppPage() {
  const [cryptoInput, setCryptoInput] = useState(0);
  const [fiatInput, setFiatInput] = useState(0);
  const [orderOfInputs, setOrderOfInputs] = useState("standart");
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [selectedFiat, setSelectedFiat] = useState("USD");
  const [pairCurrence, setPairCurrence] = useState(60000);

  const changeOrder = () => {
    if (orderOfInputs === "standart") {
      setOrderOfInputs("reverse");
      return;
    }

    setOrderOfInputs("standart");
    return;
  };

  useEffect(() => {
    if (selectedCrypto === "BTC" && selectedFiat === "USD") {
      setPairCurrence(60000);
    } else if (selectedCrypto === "BTC" && selectedFiat === "EUR") {
      setPairCurrence(50000);
    } else if (selectedCrypto === "BTC" && selectedFiat === "RUB") {
      setPairCurrence(6000000);
    } else if (selectedCrypto === "USDT" && selectedFiat === "USD") {
      setPairCurrence(1);
    } else if (selectedCrypto === "USDT" && selectedFiat === "EUR") {
      setPairCurrence(0.9);
    } else if (selectedCrypto === "USDT" && selectedFiat === "RUB") {
      setPairCurrence(90);
    } else if (selectedCrypto === "ETH" && selectedFiat === "USD") {
      setPairCurrence(3200);
    } else if (selectedCrypto === "ETH" && selectedFiat === "EUR") {
      setPairCurrence(3000);
    } else if (selectedCrypto === "ETH" && selectedFiat === "RUB") {
      setPairCurrence(300000);
    }
  }, [selectedCrypto, selectedFiat]);

  const standartOrder = (
    <Grid item md={10} lg={8}>
      <Card variant="outlined" sx={{ paddingRight: "50px" }}>
        <CardContent>
          <Grid container item spacing={2} m={1}>
            <Grid item>
              <Header></Header>
            </Grid>

            <Grid
              container
              item
              justifyContent={"space-between"}
              sx={{
                flexDirection: { xs: "column", md: "row" },
                rowGap: { xs: "15px" },
              }}
            >
              <CryptoButtons
                setSelectedCrypto={setSelectedCrypto}
                selectedCrypto={selectedCrypto}
              ></CryptoButtons>
              <FiatButtons
                setSelectedFiat={setSelectedFiat}
                selectedFiat={selectedFiat}
              ></FiatButtons>
            </Grid>

            <Grid
              container
              item
              justifyContent={"space-between"}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <TextField
                onChange={(e) => {
                  setCryptoInput(+e.target.value);
                }}
                value={cryptoInput}
                id="filled-basic"
                label="Crypto"
                variant="outlined"
              />
              <IconButton
                onClick={() => {
                  changeOrder();
                  setFiatInput(cryptoInput * pairCurrence);
                }}
                color="primary"
              >
                <CurrencyExchangeIcon></CurrencyExchangeIcon>
              </IconButton>
              <TextField
                disabled
                value={cryptoInput * pairCurrence}
                label="Fiat"
                id="filled-basic"
                variant="outlined"
              />
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
    <Grid item md={10} lg={8}>
      <Card variant="outlined" sx={{ paddingRight: "50px" }}>
        <CardContent>
          <Grid container spacing={2} item m={1}>
            <Grid item>
              <Header></Header>
            </Grid>

            <Grid
              container
              item
              justifyContent={"space-between"}
              sx={{
                flexDirection: { xs: "column", md: "row" },
                rowGap: { xs: "15px" },
              }}
            >
              <FiatButtons
                setSelectedFiat={setSelectedFiat}
                selectedFiat={selectedFiat}
              ></FiatButtons>
              <CryptoButtons
                setSelectedCrypto={setSelectedCrypto}
                selectedCrypto={selectedCrypto}
              ></CryptoButtons>
            </Grid>

            <Grid
              container
              item
              justifyContent={"space-between"}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <TextField
                onChange={(e) => setFiatInput(+e.target.value)}
                value={fiatInput}
                label="Fiat"
                id="filled-basic"
                variant="outlined"
              />
              <IconButton
                onClick={() => {
                  changeOrder();
                  setCryptoInput(fiatInput / pairCurrence);
                }}
                color="primary"
              >
                <CurrencyExchangeIcon></CurrencyExchangeIcon>
              </IconButton>
              <TextField
                disabled
                value={fiatInput / pairCurrence}
                id="filled-basic"
                label="Crypto"
                variant="outlined"
              />
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
