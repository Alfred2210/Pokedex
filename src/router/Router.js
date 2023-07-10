import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "../pages/Home";
import PokemonDetailsPages from "../pages/PokemonDetailsPages";
import NoMatch from "./Nomatch";



const Routeur = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details/:id' element={<PokemonDetailsPages/>} />
                <Route path='*' element={<NoMatch/>} />

            </Routes>
        </BrowserRouter>
    );


}

export default Routeur;