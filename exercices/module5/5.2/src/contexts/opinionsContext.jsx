import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const OpinionsContext = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([]);

  const addOpinion = (text) => {
    const newOpinion = { id: uuidv4(), text, votes: 1 };
    setOpinions([...opinions, newOpinion].sort((a, b) => b.votes - a.votes));
  };

  const voteOpinion = (id) => {
    const updatedOpinions = opinions.map(opinion =>
      opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
    );
    setOpinions(updatedOpinions.sort((a, b) => b.votes - a.votes));
  };

  return (
    <OpinionsContext.Provider value={{ opinions, addOpinion, voteOpinion }}>
      {props.children}
    </OpinionsContext.Provider>
  );
};

export { OpinionsContext, ProviderWrapper };