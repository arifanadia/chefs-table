import PropTypes from 'prop-types';
import './Cooker.css'

const Cookers = ({ cookers, handlePreparing }) => {

    return (
        <div className="bg-base-100 border-2 border-gray-200 rounded-xl">
            <h4 className="text-2xl text-center">Want to cook : {cookers.length}</h4>
            <hr className="w-2/3 mx-auto my-4 text-gray-200" />
            <div>
                <table className="text-left">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cookers.map((wantCook, index) => (
                                <tr key={index}  className="bg-slate-200 ">
                                <td>{index + 1}</td>
                                <td>{wantCook.recipe_name}</td>
                                <td>{wantCook.preparing_time } minutes</td>
                                <td>{wantCook.calories} Calories</td>
                                <button onClick={() => handlePreparing(wantCook.recipe_id)} className="px-4 py-2 text-center m-4 bg-primary rounded-full text-black tex-lg font-medium">Preparing</button>
                            </tr>
                            ))
                        }
                    </tbody>


                </table>



            </div>
            <div className="mt-6">
                <h4 className="text-2xl text-center">Currently Cooking :</h4>
                <hr className="w-2/3 mx-auto my-4 text-gray-200" />
                <div>
                    <table className="text-left border-2 border-blue-600">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-200 border-2 border-blue-800 ">
                                <td>1</td>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 Calories</td>
                                <button className="p-4 text-center m-2 bg-primary rounded-full text-black tex-lg font-medium">Preparing</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

Cookers.propTypes = {
    cookers: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func,
    
    

}

export default Cookers;