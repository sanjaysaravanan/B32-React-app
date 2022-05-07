import logo from './logo.svg';
import './App.css';
import { ID } from './main';
import MainCompoent from './NewComponent';
import SampleComponent from './SampleComponent';

function App() {

  const x = 100;
  const y = 200;

  console.log(x + y);

  return ( // JSX syntax
    <div className="App" >
      <header 
        className="App-header"
      >
        <MainCompoent name="Sanjay" age="35" />
        {/* <SampleComponent name="Sanjay" age="35" /> */}
      </header>
    </div>
  );
}

export default App;
