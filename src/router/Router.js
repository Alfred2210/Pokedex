import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "../pages/Home";
import PokemonDetailsPages from "../pages/PokemonDetailsPages";
import NoMatch from "./Nomatch";
import Weather from "../pages/Weather";



const Routeur = () => {

    return (
        <BrowserRouter>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Pokemon </Link>
                        <Link to='/weather' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Weather </Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details/:id' element={<PokemonDetailsPages/>} />
                <Route path='/weather' element={<Weather/>} />
                <Route path='*' element={<NoMatch/>} />

            </Routes>
        </BrowserRouter>
    );


}

export default Routeur;