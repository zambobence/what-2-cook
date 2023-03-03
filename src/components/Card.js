import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext'
import NutritionBox from './NutritionBox'


function Card({data}) {
    const {title, image, readyInMinutes, nutrition, sourceUrl, id} = data
    const {nutrients} = nutrition

    const {addBookmarked, bookmarkedList, removeBookmarked} = useContext(RecipeContext)

    const getNutritionalValue = (arr, nutrient_name) => {
        let data = arr.find(e => e.name === nutrient_name)
        return data.amount
    }
    console.log(title)

     return (

    <div className='card'>
        <div className='card-top'>
            <img src={image} className="" alt="..." />
        </div>
        <div className='card-body'>
            <div className='flex f-center'>
                <p><i className="fa-regular fa-clock icon"></i>{readyInMinutes}</p>
                <p><i className="fa-solid fa-fire icon"></i>{getNutritionalValue(nutrients, 'Calories')}</p>
            </div>

            <NutritionBox 
                protein={data.proteinObj}
                fat={data.fatObj}
                carbs={data.carbsObj}
            />

            <h2><Link to={`/recipe/${id}`}>{title}</Link></h2>
{/* 
            <a href={`whatsapp://send?text=I have found this new recipe: ${sourceUrl}`}       data-action="share/whatsapp/share"  
        target="_blank" rel="noreferrer"> <i class="fa-brands fa-whatsapp"></i> </a>   
*/}
            {bookmarkedList.some(e => e.id === id) ?
              <button className='bookmark-icon btn-icon' onClick={() => removeBookmarked(data)}>
                <i class="fa-solid fa-bookmark"></i> 
              </button>
              : 
              <button className='bookmark-icon btn-icon' onClick={()=> addBookmarked(data)}>
                <i className="fa-regular fa-bookmark"></i>
              </button>
            }
        </div>
  
</div>
 )
}

export default Card