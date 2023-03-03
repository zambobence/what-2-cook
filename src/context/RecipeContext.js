import React from 'react'
import { useState, useContext, createContext } from 'react'

const RecipeContext = createContext()

function RecipeContextProvider({children}) {
    const [bookmarkedList, setBookmarkedList] = useState([])
    const addBookmarked = (newRecipe) => {
      setBookmarkedList(prevState => [...prevState, {title: newRecipe.title, id: newRecipe.id, image: newRecipe.image}])
      new Set(bookmarkedList)
    }

    const removeBookmarked = (data) => {
      setBookmarkedList(prevState => prevState.filter(e => e.id !== data.id ))
    }
    
  return (
    <RecipeContext.Provider value={{bookmarkedList, addBookmarked, removeBookmarked}}>
        {children}
    </RecipeContext.Provider>
  )
}

export {RecipeContext, RecipeContextProvider}