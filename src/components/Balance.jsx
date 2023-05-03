import { MainDiv, BalText, Money } from "../styled-components/Balance.Styled";

export default function Balance() {
  return (
    <MainDiv>
      <div>
        <BalText>My balance</BalText>
        <Money>$921.48</Money>
      </div>
      <img src="./images/logo.svg" />
    </MainDiv>
  );
}
