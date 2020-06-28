import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import MainFoodsScreen from './pages/MainFoodsScreen';
import MainDrinksScreen from './pages/MainDrinksScreen';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFoundPage from './pages/NotFoundPage';
import RecipesMade from './pages/RecipesMade';
import ExploreFoodsScreen from './components/ExploreFoods/ExploreFoodsScreen';
import ExploreDrinksScreen from './components/ExploreDrinks/ExploreDrinksScreen';

function App() {
  return (
    <div id="app-receitas">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/comidas" component={MainFoodsScreen} />
          <Route exact path="/bebidas" component={MainDrinksScreen} />
          <Route exact path="/comidas/:id" component />
          <Route exact path="/bebidas/:id" component />
          <Route exact path="/comidas/:id/in-progress" component />
          <Route exact path="/bebidas/:id/in-progress" component />
          <Route exact path="/explorar" component={Explore} />
          <Route exact path="/explorar/comidas" component={ExploreDrinksScreen} />
          <Route exact path="/explorar/bebidas" component={ExploreFoodsScreen} />
          <Route exact path="/explorar/comidas/ingredientes" component />
          <Route exact path="/explorar/bebidas/ingredientes" component />
          <Route exact path="/explorar/comidas/area" component />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/receitas-feitas" component={RecipesMade} />
          <Route exact path="/receitas-favoritas" component={FavoriteRecipes} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
