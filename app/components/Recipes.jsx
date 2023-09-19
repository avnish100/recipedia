import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
function Recipes({recipes}) {
  return (
    <div className="cards">
        {recipes.map((recipe) => (
        <div key={recipe.recipeId} className='card'>
          <img src= {recipe.imageSrc}/>
          <h2>{recipe.recipeName}</h2>
          
          <small>Time to Prepare: {recipe.additionalInfo.timeToPrepare}</small>
          <p>{recipe.description}</p>
          <Link href = {`recipes/${recipe.recipeId}`} className='btn'> 
          Go to Recipe<FaArrowRight></FaArrowRight></Link>
        </div>
      ))}
    </div>
    
  )
}

export default Recipes