import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Bookmarked from './pages/Bookmarked';
import Home from './pages/Home'
import RecipeByIngredient from './pages/RecipeByIngredient';
import RecipePage from './pages/RecipePage';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [expand, setExpand] = useState(false)

  const toggleExpand = () => {
    setExpand(prevState => !prevState)
  }

  return (
    <div className="layout">
      <Header toggleExpand={toggleExpand} expand={expand} setExpand={setExpand}/>
      <main>
      <Routes>
        <Route path='/what-2-cook/' element={<Home />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
        <Route path='/byingridient' element={<RecipeByIngredient />} />
        <Route path='/recipe/:recipeID' element={<RecipePage />} />
      </Routes>
      </main>
      <Footer />
      </div>
  );
}

export default App;
