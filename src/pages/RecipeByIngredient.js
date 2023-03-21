import React, {useEffect, useState} from 'react'
import ItemSelector from '../components/ItemSelector'
import CardSimple from '../components/CardSimple'
import useFetch from '../customHooks/useFetch';
function RecipeByIngredient() {

    const [options, setOptions] = useState([]);
    const [searchResults, setSearchResults] = useState([])
    const [searchTriggered, setSearchTriggered] = useState(false)
    const {data, loading, error, fetchRecipe} = useFetch()
    
    
    
    
    const handleFetch = async () => {
        let ingredientString = options.length < 2 ? options[0] : options.join(',+')
        const urlParam = `findByIngredients?ingredients=${ingredientString}`
        fetchRecipe(urlParam)
        setSearchTriggered(true)
    }

    useEffect(() => {
        setSearchResults(data)
    },[data])

    useEffect(() => {
        options?.length === 0 && setSearchTriggered(false)
    },[options])

    return (
    <div className='container'>
        <h2>Search recipe based on ingredients</h2>
        <ItemSelector options={options} handleSearch={handleFetch} setOptions={setOptions} />
        
        <div className='grid'>
        {searchTriggered && searchResults?.length < 1 ? 
                <h4 className='no-result'>No recipes found, please refine your search. </h4>
            :
            <>
                {searchResults?.map((e, i) => <CardSimple key={i} data={e} />)}
            </>
            }
        </div>
        

    </div>
  )
}

export default RecipeByIngredient