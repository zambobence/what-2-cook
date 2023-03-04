const fetchRecipe = async  (fetchParam) =>{
    const api_2 = process.env.REACT_APP_RECIPE_API_KEY
    let res = await fetch(`https://api.spoonacular.com/recipes/${fetchParam}&apiKey=${api_2}`)
    let data = await res.json()
    return data
}

export default fetchRecipe