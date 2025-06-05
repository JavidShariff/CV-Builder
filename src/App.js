import './App.css';
import Navbar from './components/Navbar';
import Registor from './components/Auth/Registor';
import Login from './components/Auth/Login';
import { Routes, Route,Navigate } from "react-router-dom";
import Createresume from './components/Createresume';
import { useState } from 'react';
import Resumetemplete from './components/Resumetemplete';
import IntroRv from './components/IntroRv';
import IntroJo from './components/IntroJo';
import JoborderTemplete from './components/JoborderTemplete';
import Createjoborder from './components/Createjoborder'

function App() {
  const [currentuser,setCurrentuser] = useState(false);
  const RequireAuth = ({children})=>{
    return currentuser ? (children) : <Navigate to ="/login"/>
  }
  return (
    <>
    <Navbar setCurrentuser = {setCurrentuser}/>
    <div className="App">
    <Routes>
          <Route exact path="/" element={<Registor />} />
          <Route path="/login" element={<Login setCurrentuser = {setCurrentuser}
          />} />
          <Route index path="/createresume" element={
            <RequireAuth>
            <Createresume/>
          </RequireAuth>} />
          <Route index path="/tempresume" element={
            <RequireAuth>
              <Resumetemplete/>
          </RequireAuth>} />
          <Route index path="/introrv" element={
            <RequireAuth>
              <IntroRv/>
          </RequireAuth>} />
          <Route index path="/introjo" element={
            <RequireAuth>
            <IntroJo/>
          </RequireAuth>} />
          <Route index path="/tempjoborder" element={
            <RequireAuth>
              <JoborderTemplete/>
          </RequireAuth>} />
          <Route index path="/createjoborder" element={
            <RequireAuth>
              <Createjoborder/>
          </RequireAuth>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
