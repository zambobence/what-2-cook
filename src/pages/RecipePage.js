import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import NutritionBox from '../components/NutritionBox'
import { restructureRecipes } from '../function/reconstructureRecipes'
import { RecipeContext } from '../context/RecipeContext'
import fetchRecipe from '../function/fetchRecipe'
import TimeCalBox from '../components/TimeCalBox'
function RecipePage() {

  const {addBookmarked, bookmarkedList, removeBookmarked} = useContext(RecipeContext)
  const [data, setData] = useState({})
  const {recipeID} = useParams() 

  const handleFetch = async () => {
    const urlParam = `${recipeID}/information?includeNutrition=true`
    fetchRecipe(urlParam).then( res => {
      let newData = restructureRecipes(res)
      setData(newData) 
    })
  }


  useEffect(() => {handleFetch()}, [])

  return (
    <div className='container recipe-page'>
      <h1>{data.title}</h1>
      <div className='recipe-img-container'>
        <img src={data.image} alt='food' className='recipe-img' />
        {bookmarkedList.some(e => e.id === data.id) ?
          <button className='bookmark-icon btn-icon' onClick={() => removeBookmarked(data)}>
            <i class="fa-solid fa-bookmark"></i> 
          </button>
          : 
          <button className='bookmark-icon btn-icon' onClick={()=> addBookmarked(data)}>
            <i className="fa-regular fa-bookmark"></i>
          </button>
        }  
      </div>
      <div className='recipe-body'>
        
        <TimeCalBox data={data} />
        <NutritionBox 
          protein={data?.proteinObj}
          fat={data?.fatObj}
          carbs={data?.carbsObj}
        />
        <h3>Ingredients:</h3>
        <ul className='ingredient-list'>
          {data.extendedIngredients?.map(e => <li>{e?.original}</li>)}
        </ul>
        
        <h3>Instructions:</h3>
        {data?.instructions?.includes('<ol>') ? 
        <div className='instructions'dangerouslySetInnerHTML={{ __html: data?.instructions}}>
        </div>
        : 
        <p className='instructions'>{data?.instructions}</p>
      }
      </div>
    </div>
  )
}

export default RecipePage