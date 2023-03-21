import React, {useEffect, useState} from 'react'
import ItemSelector from '../components/ItemSelector'
import CardSimple from '../components/CardSimple'
import useFetch from '../customHooks/useFetch';
import NoResultsComponent from '../components/NoResultsComponent';
function RecipeByIngredient() {

    const [options, setOptions] = useState([]);
    const [searchResults, setSearchResults] = useState([])
    const [searchTriggered, setSearchTriggered] = useState(false)
    const {data, loading, error, fetchRecipe} = useFetch()
    
    const RecipeCardArray = searchResults?.map((e, i) => <CardSimple key={i} data={e} />)
    
    
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
        {loading ? <p>Loading...</p> : 
        <div className='grid'>
            {searchTriggered && searchResults?.length < 1 ? <NoResultsComponent /> : <RecipeCardArray />}
        </div>
        }
    </div>
  )
}

export default RecipeByIngredient