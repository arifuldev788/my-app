import logo from './logo.svg';
import './App.css';
var style = {
  color: "red",
  fontSize: "18px"
}
function App() {
  var person = {
    name: "Dr Mahfuzur Rahman",
    job: "Singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Actress"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>This is {person.name}. He is top {person.job} of Bangladesh.</h1>
        <h1 style={style}>This is {person2.name}. He is top {person2.job} of Bangladesh.</h1>
      </header>
    </div>
  );
}

export default App;
