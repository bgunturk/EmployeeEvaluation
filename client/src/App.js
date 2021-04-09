// import './App.css';
import Home from './home';
import Detaits from './details';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Router exact path="/" component={Home} />
        <Router exact path="/details" component={Detaits} />
      </Switch>
    </div>
  );
}

export default App;
