import React, {useState} from 'react'
import ItemSelector from '../components/ItemSelector'
import CardSimple from '../components/CardSimple'
function RecipeByIngredient() {
    const [options, setOptions] = useState([]);

    const [searchResults, setSearchResults] = useState([])

    
    const fetchRecipes = async () => {
        let ingredientString = options.length < 2 ? options[0] : options.join(',+')
        let res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&apiKey=2c1df09c7ce449c79fc5c1bd267f0c94`)
        let data = await res.json()
        await console.log(data)
        setSearchResults(data)  
    }

    return (
    <div className='container'>
        <h2>Search recipe based on ingredients</h2>
        <ItemSelector options={options} handleSearch={fetchRecipes} setOptions={setOptions} />
        
        <div className='grid'>
            {searchResults?.map((e, i) => <CardSimple key={i} data={e} />)}    
        </div>

    </div>
  )
}

export default RecipeByIngredient