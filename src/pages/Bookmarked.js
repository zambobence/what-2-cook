import React, {useContext} from 'react'
import Card from '../components/Card'
import CardSimple from '../components/CardSimple'
import { RecipeContext } from '../context/RecipeContext'


function Bookmarked() {
  const {bookmarkedList} = useContext(RecipeContext)
  return (
    <div className='container'>
      <h2>Recipes you have saved</h2>
      <div className='grid'>
        {bookmarkedList.map((e, i) => <CardSimple key={i} data={e} />)}
      </div>
    </div>
  )
}

export default Bookmarked