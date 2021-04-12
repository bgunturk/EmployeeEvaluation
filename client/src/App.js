import './index.css';
import Home from './home';
import Details from './components/details/details';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router>
    </div>
  );
};

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
