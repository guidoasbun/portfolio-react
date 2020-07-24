import React from "react";
import Menu from "./components/layout/Menu";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
