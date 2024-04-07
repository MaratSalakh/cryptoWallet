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
import SecondCryptoButtons from "@/UI/SecondCryptoButtons";

import { useState, useEffect } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// or `v1X-appRouter` if you are using Next.js v1X

import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export default function ExchangePage(props: any) {
  const [inputFirst, setInputFirst] = useState(0);
  const [inputSecond, setInputSecond] = useState(0);
  const [orderOfInputs, setOrderOfInputs] = useState("standart");
  const [cryptoFirst, setCryptoFirst] = useState("BTC");
  const [cryptoSecond, setCryptoSecond] = useState("BTC");
  const [pairCurrence, setPairCurrence] = useState(1);

  const changeOrder = () => {
    setInputFirst(inputFirst * pairCurrence);
    const variableForChangeCrypto = cryptoFirst;
    setCryptoFirst(cryptoSecond);
    setCryptoSecond(variableForChangeCrypto);

    if (orderOfInputs === "standart") {
      setOrderOfInputs("reverse");
      return;
    }

    setOrderOfInputs("standart");
    return;
  };

  useEffect(() => {
    if (cryptoFirst === "BTC" && cryptoSecond === "BTC") {
      setPairCurrence(1);
    } else if (cryptoFirst === "BTC" && cryptoSecond === "ETH") {
      setPairCurrence(20);
    } else if (cryptoFirst === "BTC" && cryptoSecond === "USDT") {
      setPairCurrence(60000);
    } else if (cryptoFirst === "ETH" && cryptoSecond === "ETH") {
      setPairCurrence(1);
    } else if (cryptoFirst === "ETH" && cryptoSecond === "BTC") {
      setPairCurrence(1 / 20);
    } else if (cryptoFirst === "ETH" && cryptoSecond === "USDT") {
      setPairCurrence(3300);
    } else if (cryptoFirst === "USDT" && cryptoSecond === "USDT") {
      setPairCurrence(1);
    } else if (cryptoFirst === "USDT" && cryptoSecond === "BTC") {
      setPairCurrence(1 / 60000);
    } else if (cryptoFirst === "USDT" && cryptoSecond === "ETH") {
      setPairCurrence(1 / 3300);
    }
  }, [cryptoFirst, cryptoSecond]);

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
                setSelectedCrypto={setCryptoFirst}
                selectedCrypto={cryptoFirst}
              ></CryptoButtons>
              <SecondCryptoButtons
                setSelectedCrypto={setCryptoSecond}
                selectedCrypto={cryptoSecond}
              ></SecondCryptoButtons>
            </Grid>

            <Grid
              container
              item
              justifyContent={"space-between"}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
            >
              <TextField
                onChange={(e) => setInputFirst(+e.target.value)}
                value={inputFirst}
                id="filled-basic"
                label="Crypto"
                variant="outlined"
              />
              <IconButton
                onClick={() => {
                  changeOrder();
                }}
                color="primary"
              >
                <CurrencyExchangeIcon></CurrencyExchangeIcon>
              </IconButton>
              <TextField
                disabled
                // onChange={(e) => setInputSecond(+e.target.value)}
                value={inputFirst * pairCurrence}
                label="Crypto"
                id="filled-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item mb={2}>
              <Button variant="contained">Exchange</Button>
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
          {standartOrder}
        </Grid>
      </Box>
    </AppRouterCacheProvider>
  );
}
