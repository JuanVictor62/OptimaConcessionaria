import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landingpage from './pages/landingpage';
import Login from './pages/login';
import Pagecarros from './pages/pagecarros';
import Cadastrocarro from './pages/cadastrocarro';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/pagecarros' element={<Pagecarros/>} />
                <Route path='/cadastrocarro' element={<Cadastrocarro/>} />
                <Route path='/alterarcarro/:idparam' element={<Cadastrocarro/>} />
            </Routes>
        </BrowserRouter>
    )
}
