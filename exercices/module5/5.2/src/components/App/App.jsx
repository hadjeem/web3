import OpinionsList from '../OpinionsList';
import AddOpinionForm from '../AddOpinionForm';
import './App.css';

function App() {
  return (
    <div>
      <h1>Opinion Voting App</h1>
      <OpinionsList />
      <AddOpinionForm />
    </div>
  );
}

export default App;