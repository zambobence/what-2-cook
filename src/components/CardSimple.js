import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
function CardSimple({data}) {
  
  const {addBookmarked, bookmarkedList, removeBookmarked} = useContext(RecipeContext)
  const {image, title, id} = data

  return (
    <div className='card card-simple'>
        <div className='card-top'>
            <img src={image} alt='recipe illustration' />
        </div>
        <div className='card-body'>
        <h2><Link to={`/recipe/${id}`}>{title}</Link></h2>

          {/*
            {data.missedIngredientCount && <p className='ingred-simple'>Number of missing ingredients {data.missedIngredientCount}</p> }
           */}  
            {bookmarkedList.some(e => e.id === id) ?
              <button className='bookmark-icon btn-icon' onClick={() => removeBookmarked(data)}>
                <i class="fa-solid fa-bookmark"></i> 
              </button>
              : 
              <button className='bookmark-icon btn-icon' onClick={()=> addBookmarked(data)}>
                <i class="fa-regular fa-bookmark"></i>
              </button>
            }
        </div>
    </div>
  )
}

export default CardSimple