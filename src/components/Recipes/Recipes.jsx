import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))


    },[])
    return (
        <div className="my-20">
            <div className="text-center ">
                <h1 className="text-4xl font-semibold mt-4">Our Recipes</h1>
                <p className="text-gray-500 my-4">Looking for delicious, Asian-style fast food? Look no more, because here at Yummy Yummy Restaurant in Oklahoma City, Oklahoma, were serving your favorite Chinese food! A few of our Chefs specials include Sesame Chicken, Pineapple Chicken, and Seafood Pan Fried Noodle. </p>
            </div>
            {
                recipes.map(recipe => 
                <Recipe key={recipe.id} recipe={recipe}></Recipe>)

            }
            
        </div>
    );
};

export default Recipes;