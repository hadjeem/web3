import { useContext } from 'react';
import { CountersContext } from '../../contexts/countersContext';
import { GoodButton, OkButton, BadButton, ResetButton } from '../Buttons';
import './App.css';

function App() {
  const { good, ok, bad } = useContext(CountersContext);

  return (
    <div>
      <h1>Feedback App</h1>
      <div className="buttons">
        <GoodButton />
        <OkButton />
        <BadButton />
        <ResetButton />
      </div>
      <div className="counters">
        <p>Good: {good}</p>
        <p>Ok: {ok}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
}

export default App;