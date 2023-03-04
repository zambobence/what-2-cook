import React, {useState} from 'react'
import ItemSelector from '../components/ItemSelector'
import CardSimple from '../components/CardSimple'
import fetchRecipe from '../function/fetchRecipe';
function RecipeByIngredient() {

    const [options, setOptions] = useState([]);
    const [searchResults, setSearchResults] = useState([])

    
    const handleFetch = async () => {
        const ingredientString = options.length < 2 ? options[0] : options.join(',+')
        const urlParam = `findByIngredients?ingredients=${ingredientString}`
        fetchRecipe(urlParam).then( res => {
            setSearchResults(res)
        })
    }

    return (
    <div className='container'>
        <h2>Search recipe based on ingredients</h2>
        <ItemSelector options={options} handleSearch={handleFetch} setOptions={setOptions} />
        
        <div className='grid'>
            {searchResults?.map((e, i) => <CardSimple key={i} data={e} />)}    
        </div>

    </div>
  )
}

export default RecipeByIngredient