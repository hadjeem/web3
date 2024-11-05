import { useState, useContext } from 'react';
import { OpinionsContext } from '../contexts/opinionsContext';

const AddOpinionForm = () => {
  const [text, setText] = useState('');
  const { addOpinion } = useContext(OpinionsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addOpinion(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your opinion"
      />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default AddOpinionForm;