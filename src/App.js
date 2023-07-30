import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width : {xl : '1488px'}}}>
        <Navbar />

        {/* Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.  */}

        {/* To define the "Routes" component, we have define the "BrowserRouter" component in index.js and the App.js is wrapped inside it. */}

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
            {/* id can be 1,2 3,4 ... any number */}
        </Routes>
        {/* <Home /> */}
        <Footer />
    </Box>
  )
}

export default App