import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../template/Logo'
import Nav from '../template/Nav'
// import Home from '../../components/home/Home'
import Footer from '../template/Footer'
import React from 'react'
import Routes from './Routes'
import { HashRouter } from 'react-router-dom'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
    