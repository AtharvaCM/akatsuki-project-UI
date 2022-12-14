import React, { useMemo, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// custom components
import Router from "./router/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// context
import ColorModeContext from "./store/color-mode-context";

// error boundary
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#3C71FF",
          },
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main style={styles.main}>
            <Router />
          </main>
          <Footer />
        </ThemeProvider>
      </ErrorBoundary>
    </ColorModeContext.Provider>
  );
};

const styles = {
  main: {
    minHeight: "70vh",
  },
};

export default App;
