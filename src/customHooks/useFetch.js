import React, { useEffect } from 'react'

function useFetch() {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null)
    
    const api_2 = process.env.REACT_APP_RECIPE_API_KEY

    const fetchRecipe = async  (fetchParam) =>{
        setLoading(true)
        try {
            let res = await fetch(`https://api.spoonacular.com/recipes/${fetchParam}&apiKey=${api_2}`)
            let data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
            
        }
    }

    
  return { loading, error, data, fetchRecipe}
}

export default useFetch