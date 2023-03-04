export const restructureRecipes = (obj) => {


    const getNutritionalValue = (arr, nutrient_name) => {
        let data = arr.find(e => e.name === nutrient_name)
        return data
    }


    let nutritionObj = obj?.nutrition.nutrients


    const caloriesObj = getNutritionalValue(nutritionObj, 'Calories')
    const proteinObj = getNutritionalValue(nutritionObj, 'Protein')
    const fatObj = getNutritionalValue(nutritionObj, 'Fat')
    const carbsObj = getNutritionalValue(nutritionObj, 'Carbohydrates')
    let newRecipeObj = {...obj, caloriesObj, proteinObj, fatObj, carbsObj}


    

    return newRecipeObj
}