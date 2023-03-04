import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'
import { restructureRecipes } from '../function/reconstructureRecipes'
import fetchRecipe from '../function/fetchRecipe'

function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([]) 
    const [sortBy, setSortBy] = useState('')
    const [searchTriggered, setSearchTriggered] = useState(false)

    const sortByFunction = (dummy) => {
        let sorted = [...searchResults].sort((a,b) => a[dummy].amount - b[dummy].amount);
        console.log('The sorted')
        setSearchResults(sorted)
    }



    const handleFetch = async () => {
        const urlParam = `complexSearch?query=${searchTerm}&addRecipeNutrition=true&instructionsRequired=true&number=10&`
        fetchRecipe(urlParam).then( res => {
            let newData = res.results.map(e => restructureRecipes(e))
            console.log(newData)
            setSearchResults(newData)
            setSearchTriggered(true)
        })
    }

    

    useEffect(() => {
        sortBy !=='' && sortByFunction(sortBy)
    },[sortBy])
        
    

  return (
    <div className='container'>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleSearch={()=>handleFetch()}/>
        {searchTerm && searchTriggered && <h3>{searchResults.length} results for the searchterm {searchTerm}</h3>}
        
        <div className='sort-container'>
            <span>Sort recipes by</span>
            <select className='sort-select' onChange={(e)=> setSortBy(e.target.value)} value={sortBy}>
                <option value={''}>{' '}</option>
                <option value={'caloriesObj'}>calories</option>
                <option value={'proteinObj'}>protein</option>
                <option value={'carbsObj'}>carbs</option>
                <option value={'fatObj'}>fat</option>
            </select>
        </div>

        <div className='grid'>
            {searchTriggered && searchResults.length < 1 ? 
                <h4 className='no-result'>No recipes found, please refine your sreach. </h4>
            :
            <>
                {searchResults.map((e, i) => <Card key={i} data={e} />)}
            </>
            }
            </div>

    </div>
  )
}

export default Home