import './App.css';
import Info from './info.js';

function App() {
  return (
    <div className="App">
      <p>Test</p>
      <Info></Info>
      <p>Test 2</p>
      <Info/>
      <AddItem text="aleck" number={2} />
      <AddItem text="not aleck" />
    </div>
  );
}



function AddItem(props){
  const value = props.text;
  return (
    <form>
      <label for="text-form">blah blah </label>
      <input type="text" value={value} id="text-form"></input>
      <Info></Info>
      <p>{props.number}</p>
    </form>
  );
}

export default App;
