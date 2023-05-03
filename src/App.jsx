import { GlobalStyled } from "./styled-components/Global.Styled";
import Balance from "./components/Balance";
import Spending from "./components/Spending";

function App() {
  return (
    <>
      <GlobalStyled />
      <Balance />
      <Spending />
    </>
  );
}

export default App;
