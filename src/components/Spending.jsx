import { useEffect, useState } from "react";
import {
  SpenDiv,
  SpenTxt,
  DaysTable,
  Column,
  Spent,
  DaysOfWeek,
  Days,
  Hr,
  Total,
  ThisMonth,
  SpentMonth,
  Percent,
} from "../styled-components/Spending.Styled";

export default function Spending() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("./data.json");
      const weekdays = await response.json();
      setData(weekdays);
    })();
  }, []);

  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const date = new Date();
  const currentDay = days[date.getDay()];

  const height = [
    {
      mar: "0px",
      pad: "0px",
    },
    {
      mar: "-50px",
      pad: "50px",
    },
    {
      mar: "-100px",
      pad: "100px",
    },
    {
      mar: "-49px",
      pad: "49px",
    },
    {
      mar: "-27px",
      pad: "27px",
    },
    {
      mar: "-74px",
      pad: "74px",
    },
    {
      mar: "-33px",
      pad: "33px",
    },
  ];

  return (
    <SpenDiv>
      <SpenTxt>Spending - Last 7 days</SpenTxt>
      <DaysTable>
        {data?.map((item, index) => {
          return (
            <Column
              bg={
                index === days.indexOf(currentDay) - 1 ? "#76B5BC" : "#EC755D"
              }
              key={Math.random()}
              mTop={height[index].mar}
              pTop={height[index].pad}
            />
          );
        })}
      </DaysTable>
      <DaysOfWeek>
        {days.map((item) => {
          return <Days key={Math.random()}>{item}</Days>;
        })}
      </DaysOfWeek>
      <Hr />
      <Total>
        <div>
          <ThisMonth>Total this month</ThisMonth>
          <SpentMonth>$478.33</SpentMonth>
        </div>
        <div>
          <Percent>+2.4% </Percent>
          <ThisMonth>from last month</ThisMonth>
        </div>
      </Total>
    </SpenDiv>
  );
}
