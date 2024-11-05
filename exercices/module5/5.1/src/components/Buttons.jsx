import { useContext } from 'react';
import { CountersContext } from '../contexts/countersContext';

const GoodButton = () => {
  const { increaseGood } = useContext(CountersContext);
  return <button onClick={increaseGood}>Good</button>;
};

const OkButton = () => {
  const { increaseOk } = useContext(CountersContext);
  return <button onClick={increaseOk}>Ok</button>;
};

const BadButton = () => {
  const { increaseBad } = useContext(CountersContext);
  return <button onClick={increaseBad}>Bad</button>;
};

const ResetButton = () => {
  const { resetAll } = useContext(CountersContext);
  return <button onClick={resetAll}>Reset</button>;
};

export { GoodButton, OkButton, BadButton, ResetButton };