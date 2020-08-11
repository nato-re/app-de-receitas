import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeProvider from './Context/RecipeProvider';
import './App.css';
import Login from './pages/Login/Login';
import MainFoodsScreen from './pages/MainFoodsScreen';
import MainDrinksScreen from './pages/MainDrinksScreen';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFoundPage from './pages/NotFoundPage';
import RecipesMade from './pages/RecipesMade';
import InProgress from './pages/InProgress';

import Details from './components/Details/Details';

import ExploreDrinksScreen from './pages/Explore/Drink/ExploreDrinks/ExploreDrinksScreen';

import ExploreFoodsScreen from './pages/Explore/Food/ExploreFoods/ExploreFoodsScreen';
import ExploreFoodByIng from './pages/Explore/Food/ExploreFoods/ExploreFoodByIng/ExploreFoodByIng';
import ExploreFoodByArea from './pages/Explore/Food/ExploreFoods/ExploreFoodByArea/ExploreFoodByArea';
import ExploreDrinkByIng from './pages/Explore/Drink/ExploreDrinks/ExploreDrinkByIng/ExploreDrinkByIng';

function App() {
  return (
    <div id="app-receitas">
      <RecipeProvider>
        <Router>
          <Switch>
            <Route exact path="app-de-receitas/" component={Login} />
            <Route exact path="app-de-receitas/comidas" component={MainFoodsScreen} />
            <Route exact path="app-de-receitas/bebidas" component={MainDrinksScreen} />
            <Route exact path="app-de-receitas/comidas/:id" component={Details} />
            <Route exact path="app-de-receitas/bebidas/:id" component={Details} />
            <Route exact path="app-de-receitas/comidas/:id/in-progress" component={InProgress} />
            <Route exact path="app-de-receitas/bebidas/:id/in-progress" component={InProgress} />
            <Route exact path="app-de-receitas/explorar" component={Explore} />
            <Route exact path="app-de-receitas/explorar/comidas" component={ExploreFoodsScreen} />
            <Route exact path="app-de-receitas/explorar/bebidas" component={ExploreDrinksScreen} />
            <Route exact path="app-de-receitas/explorar/comidas/ingredientes" component={ExploreFoodByIng} />
            <Route exact path="app-de-receitas/explorar/bebidas/ingredientes" component={ExploreDrinkByIng} />
            <Route exact path="app-de-receitas/explorar/comidas/area" component={ExploreFoodByArea} />
            <Route exact path="app-de-receitas/perfil" component={Profile} />
            <Route exact path="app-de-receitas/receitas-feitas" component={RecipesMade} />
            <Route exact path="app-de-receitas/receitas-favoritas" component={FavoriteRecipes} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </RecipeProvider>
    </div>
  );
}

export default App;
