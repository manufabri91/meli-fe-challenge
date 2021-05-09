import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import ProductDetail from './components/ProductDetail/ProductDetail';
import SearchBar from './components/SearchBar/SearchBar';
import SearchListing from './components/SearchListing/SearchListing';

const App = () => {
  return (
    <Router>
      <SearchBar />
      <Switch>
        <Route path='/items/:id'>
          <ProductDetail />
        </Route>
        <Route path='/items'>
          <SearchListing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
