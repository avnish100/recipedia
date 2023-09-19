import Link from 'next/link';
import Header from '../../components/Header'

async function fetchRecipeInfo(name) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '82b9499e05msh0985a72e506510dp1e67a6jsn09231656bed4',
            'X-RapidAPI-Host': 'bbc-good-food-api.p.rapidapi.com'
        }
    };
    const url = `https://bbc-good-food-api.p.rapidapi.com/recipe/${name}`;
    const res = await fetch(url,options);
    const recipe = await res.json();
    
    return recipe;

}

const RecipePage = async ({params: {name}}) => {
    const recipe = await fetchRecipeInfo(name);
    return (
        <>
        <Header></Header>
        <div className="recipe-card">
            <img src={recipe.imageSrc} style={{maxHeight:"200px"}}></img>
            <div className="recipe-info">
                <div>Cooking Time {recipe.timeToCook.Cook}</div>
                <h1>{recipe.name}</h1>
                <small>{recipe.portions}</small>
                <p>{recipe.description}</p>
                <ul>
                {Object.keys(recipe.nutrition).map((key, index) => ( 
          <li key={index}> {key} : {recipe.nutrition[key]}</li> 
        ))}
                </ul>
            
                <ul>
                    Ingredients:
                    {
                        recipe.ingredients.map((ingredient)=>(<li>{ingredient}</li>))
                    }
                    
                </ul>

                <ol>
                {Object.keys(recipe.steps).map((key, index) => ( 
          <li key={index}>{recipe.steps[key]}</li> 
        ))}
                </ol>
            </div>
            
            
        </div>
        </>
    )
}

export default RecipePage;