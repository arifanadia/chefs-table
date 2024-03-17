import profile from '../../assets/images/profile.png'
import './Header.css'
import '../../../src/index.css'
const Header = () => {
    return (
        
        <div className='Lexend'>
             {/* navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-4xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="input input-bordered rounded-3xl bg-slate-100 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="md:w-4 md:h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <img className="w-12 h-12 bg-primary rounded-full p-1 ml-4" src={profile} />

                </div>
            </div>
            {/* banner */}
            <div>
                <div className='bg-img text-center px-6 py-4 md:px-48 md:py-36 rounded-2xl md:mt-10'>
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className='md:text-lg text-white my-6'>he best restaurant websites have one thing in common: beautiful presentation. An attractive design with excellent imagery can bring you many customers. Usability is important. But it’s the mouth-watering visuals that make these sites great.</p>
                    <div className='flex justify-center gap-4'>
                        <button className='bg-primary text-black md:text-xl font-semibold md:px-8 md:py-5 px-4 py-2 rounded-full'>Explore Now</button>
                        <button className='md:text-xl border-2 border-white text-white font-semibold md:px-8 md:py-4 px-4 py-2 rounded-full'>Our Feedback</button>
                    </div>

                </div>
            </div>
        </div>

       
       

    );
};

export default Header;