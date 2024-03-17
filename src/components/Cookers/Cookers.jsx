import PropTypes from 'prop-types';
import './Cooker.css'

const Cookers = ({ cookers, handlePreparing, currentCook }) => {

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
                                <tr key={index} className="bg-slate-200">
                                    <td>{index + 1}</td>
                                    <td>{wantCook.recipe_name} </td>
                                    <td>{wantCook.preparing_time} minutes </td>
                                    <td>{wantCook.calories} calories</td>
                                    <td><button onClick={() => handlePreparing(wantCook.recipe_id, wantCook)} className="px-4 py-2 text-center m-4 bg-primary rounded-full text-black tex-lg font-medium">Preparing</button></td>
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
                    <table className="text-left">

                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentCook.map((cook, index) => (
                                    <tr key={index} className="bg-slate-200">
                                        <td>{index + 1}</td>
                                        <td>{cook.recipe_name} </td>
                                        <td>{cook.preparing_time} minutes </td>
                                        <td>{cook.calories} calories</td>

                                    </tr>


                                ))
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td >Total time ={currentCook.reduce((p,c)=>p + c.preparing_time,0)}  minutes</td>
                                <td>Total Calories ={currentCook.reduce((p,c)=>p + c.calories,0)} Calories</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </div>
    );
};

Cookers.propTypes = {
    cookers: PropTypes.array.isRequired,
    currentCook: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func,



}

export default Cookers;