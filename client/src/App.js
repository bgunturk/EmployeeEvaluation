import './index.css';
import Home from './home';
import Details from './components/details/details';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
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
