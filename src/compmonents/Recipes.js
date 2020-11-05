import React from 'react'
import RecipiItem from './RecipiItem';

const Recipes = (props) => {

const {recipies} = props ;
    return (
        <div className="card-columns recipi">
           {
              
               recipies.map(recipe => < RecipiItem 
               name= {recipe.recipe.label} 
               image = {recipe.recipe.image}
               ingredientLines = {recipe.recipe.ingredientLines}
               />
                )
           }
        </div>
    )
}
export default Recipes
