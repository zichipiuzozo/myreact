import './App.scss';
import MyComponent from './example/myComponent.js';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className='App-Header'>
        <img src={logo} className="App-logo" alt="logo" />
        <div><MyComponent /></div>
      </header>
    </div>
  );
}

export default App;
