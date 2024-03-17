import PropTypes from 'prop-types';
import time from '../../assets/images/time.png'
import calorie from '../../assets/images/calories.png'

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = recipe;

    return (
        <div>
            <div className="bg-base-100 border-2 border-gray-100 rounded-xl ">
                <figure className="px-4 pt-6">
                    <img className='w-[331px] h-[200px] mx-auto rounded-xl' src={recipe_image} alt={`recipes title ${recipe_name} `} />
                </figure>
                <div className="p-4">
                    <h3 className="font-semibold text-xl text-black my-2">{
                        recipe_name}</h3>
                    <p className='text-gray-500'>{short_description}</p>
                    <hr className="w-4/5 mx-auto my-6 text-gray-200" />
                    <h4 className='text-lg font-medium text-black'>Ingredients : {ingredients.length}</h4>
                    <ul className='list-disc ml-4 mt-4'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }

                    </ul>
                    <hr className="w-4/5 mx-auto my-6 text-gray-200" />
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img src={time} alt="" />
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={calorie} alt="" />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <button onClick={()=>handleWantToCook(recipe)} className="px-6 py-4 mt-6 text-center bg-primary rounded-full text-black tex-xl font-medium">Want to Cook</button>

                </div>
            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook : PropTypes.func
}

export default Recipe;