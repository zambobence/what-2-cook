import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'
import { restructureRecipes } from '../function/reconstructureRecipes'
import useFetch from '../customHooks/useFetch'
import SortComponent from '../components/SortComponent'
import NoResultsComponent from '../components/NoResultsComponent'
import LoadingComponent from '../components/LoadingComponent'

function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([]) 
    const [sortBy, setSortBy] = useState('')
    const [searchTriggered, setSearchTriggered] = useState(false)

    const {data, loading, error, fetchRecipe} = useFetch()
    const sortByFunction = (dummy) => {
        let sorted = [...searchResults].sort((a,b) => a[dummy].amount - b[dummy].amount);
        setSearchResults(sorted)
    }
    
    const RecipeCardArray = searchResults?.map((e, i) => <Card key={i} data={e} />)



    const handleFetch = async () => {
        const urlParam = `complexSearch?query=${searchTerm}&addRecipeNutrition=true&instructionsRequired=true&number=10&`
        fetchRecipe(urlParam)
    }

    useEffect(() => {
        let newData = data?.results?.map(e => restructureRecipes(e))
        setSearchResults(newData)
            setSearchTriggered(true)
    },[data])

    useEffect(() => {
        sortBy !=='' && sortByFunction(sortBy)
    },[sortBy])
        

    

  return (
    <div className='container'>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleSearch={()=>handleFetch()}/>
        {loading ? 
            <LoadingComponent />
            :
            (searchTerm && searchTriggered) && 
            <>
                <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
                <h3 className='search-result'>{searchResults?.length} results for the search term {searchTerm}</h3>
            </>
         }
        
        <div className='grid'>
            {searchTriggered && searchResults?.length < 1 ? 
                <NoResultsComponent />             :
            <RecipeCardArray />
            }
            </div>

    </div>
  )
}

export default Home