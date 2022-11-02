import './App.css';
import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Login from './Components/Login';
import AddTodo from './Components/AddTodo';
import ListTodo from './Components/ListTodo';
import UpdateTodo from './Components/UpdateTodo';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route exact path='/Register' element={<Register/>} />   
         <Route exact path='/Login' element={<Login/>} /> 
         <Route exact path='/AddTodo' element={<AddTodo/>} /> 
         <Route exact path='/ListTodo' element={<ListTodo/>} /> 
        <Route exact path='/UpdateTodo/:idTodo' element={<UpdateTodo/>} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
