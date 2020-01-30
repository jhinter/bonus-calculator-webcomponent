import { Styled } from "direflow-component";
import React, { FC, useEffect, useState } from "react";
import styles from "./App.scss";
import InputNumber, { InputNumberProps } from "./components/InputNumber";

interface WebComponentProps {
  question: string;
  fixedBonus: number;
  variableBonus: number;
  minInvest: number;
  maxInvest: number;
}

const App: FC<WebComponentProps> = props => {

  const [invest, setInvest] = useState(1000);
  const [bonus, setBonus] = useState(0);

  const calcBonus = (invest: number): number => {
    return invest >= Number(props.minInvest)
      ? Number(props.fixedBonus) + invest * Number(props.variableBonus)
      : 0;
  };

  useEffect(() => {
    setBonus(calcBonus(invest));
  }, [invest]);

  const inputNumberProps: InputNumberProps = {
    label: props.question,
    placeholder: "Investment",
    value: invest,
    setValue: setInvest
  };

  return (
    <Styled styles={styles}>
      <div className="App">
        <InputNumber {...inputNumberProps}></InputNumber>
        <p>
          Your Bonus <span role="img" aria-label="€">💰</span>
        </p>
        <p>
          <strong>{(bonus.toFixed(2) + " €")}</strong>
        </p>
      </div>
    </Styled>
  );
};

export default App;
