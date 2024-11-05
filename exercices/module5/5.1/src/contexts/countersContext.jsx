import React, { useState} from 'react';

const CountersContext = React.createContext(null);

const ProviderWrapper = (props) => {
  const [good, setGood] = useState(0);
  const [ok, setOk] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseOk = () => setOk(ok + 1);
  const increaseBad = () => setBad(bad + 1);
  const resetAll = () => {
    setGood(0);
    setOk(0);
    setBad(0);
  };

  return (
    <CountersContext.Provider value={{ good, ok, bad, increaseGood, increaseOk, increaseBad, resetAll }}>
      {props.children}
    </CountersContext.Provider>
  );
};

export { CountersContext, ProviderWrapper };