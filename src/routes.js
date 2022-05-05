import React from 'react';
import { BrowserRouter, Route, Routes as RoutesWrapper } from 'react-router-dom';
import Header from './components/Header';

import Home from './Pages/Home';
import Reservas from './Pages/Reservas';

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <RoutesWrapper>
                <Route path='/' exact element={<Home />} />
                <Route path='/reservas' element={<Reservas />} />
            </RoutesWrapper>
        </BrowserRouter>
    );
}