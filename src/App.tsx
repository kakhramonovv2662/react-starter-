import Main from "@components/common/main/Main";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main />
    </BrowserRouter>
  );
}

export default App;
