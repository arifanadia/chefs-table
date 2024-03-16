import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
    const { recipe_name, short_description, recipe_image } = recipe;

    return (
        <div className='flex'>
            <div className=" bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt={`recipes title ${recipe_name} `} className="rounded-xl" />
                </figure>
                <div className=" ">
                    <h2 className="">{
                        recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className="">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;