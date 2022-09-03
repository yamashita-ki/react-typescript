import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./component/organism/layout/Header";
import { HeaderLayout } from "./component/template/HeaderLayout";
import { Router } from "./router/Router";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout>
          <Router />
        </HeaderLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
