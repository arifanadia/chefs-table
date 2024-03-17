import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cookers from "../Cookers/Cookers";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cookers, setCookers] = useState([]);

    const handleWantToCook =(cook) => {
        const isExists = cookers.find (newRecipe => newRecipe.recipe_id == cook.recipe_id);
        if(!isExists){
            setCookers([...cookers, cook])

        }
        else{
            toast.info("this item are already selected");
        }
     
    }

    const handlePreparing = (preparing) => {
        const startPreparing = cookers.filter(newRecipe => newRecipe.recipe_id !== preparing);
        setCookers([startPreparing])
    }



    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))


    }, [])
    return (
        <div className="my-20">
            <div className="text-center ">
                <h1 className="md:text-4xl text-2xl font-semibold mt-4">Our Recipes</h1>
                <p className="text-gray-500 my-4">Looking for delicious, Asian-style fast food? Look no more, because here at Yummy Yummy Restaurant in Oklahoma City, Oklahoma, were serving your favorite Chinese food! A few of our Chefs specials include Sesame Chicken, Pineapple Chicken, and Seafood Pan Fried Noodle. </p>
            </div>
            <div className="md:flex md:gap-4">
                <div className="md:grid md:grid-cols-2 gap-4">
                    {
                        recipes.map(recipe =>
                            <Recipe key={recipe.id} handleWantToCook={handleWantToCook} recipe={recipe}></Recipe>)

                    }
                </div>
               <div> <Cookers cookers= {cookers} handlePreparing={handlePreparing}></Cookers></div>
                <ToastContainer />

            </div>

        </div>
    );
};

export default Recipes;