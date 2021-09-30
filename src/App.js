import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Resturant from './components/Resturant/Resturant';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import Category from './components/AllCategory/Category';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/resturant'>
            <Resturant></Resturant>
          </Route>
          <Route exact path='/resturant/:idMeal'>
            <MealDetails></MealDetails>
          </Route>
          <Route path='/category'>
            <Category></Category>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
