// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarHeader } from '../componenet/Header';
import { Footer } from '../componenet/Footer';
import { Home } from '../componenet/Home';
import Life from '../componenet/Lifecycle';
// import { Router } from '@mui/icons-material';

function Routers() {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<NavbarHeader />} />
                    <Route path='/footer' element={<Footer />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/life' element={<Life />} />
                </Routes>
            </Router>
        </div>
    );
}
export { Routers };
