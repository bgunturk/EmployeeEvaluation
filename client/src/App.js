import './index.css';
import Home from './home';
import Detaits from './details';
import { BrowserRouter as Router, Switch , Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="container mx-auto">
    <Header />
    </div>
  
 
  );
}

export default App;
/*
<BrowserRouter>
<Header />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/details" component={Detaits} />
</Switch>
</BrowserRouter>
*/