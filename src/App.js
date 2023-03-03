import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Bookmarked from './pages/Bookmarked';
import Home from './pages/Home'
import RecipeByIngredient from './pages/RecipeByIngredient';
import RecipePage from './pages/RecipePage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
        <Route path='/byingridient' element={<RecipeByIngredient />} />
        <Route path='/recipe/:recipeID' element={<RecipePage />} />
      </Routes>
          </div>
  );
}

export default App;
