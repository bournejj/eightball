import logo from './logo.svg';
import './App.css';
import Answers from './Answers.js'
import Eightball from './Eightball'

function App() {
  return (
    <Eightball Answers={Answers}/>

  );
}

export default App;
