import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Categories from '../components/Categories'
import Login from '../components/Login';
import Premio from '../components/Premio';
import Profile from '../components/Profile';
import Questions from '../components/Questions';
import Results from '../components/Results';
import SignUp from '../components/SignUp';


const AppRouter = () => {
  return (
    <div>
    <Router>
        <Routes>
              <Route path='/categories' element={<Categories/>}/>
              <Route path='/preguntas/:categories' element={<Questions/>}/>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/perfil' element={<Profile/>}/>
              <Route path='/results' element={<Results/>}/>
              <Route path='/premio' element={<Premio/>}/>
        </Routes>
    </Router>
  </div>
  )
}

export default AppRouter