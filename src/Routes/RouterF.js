import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import Home from '../Pages/Home';

const RouterF=()=>{
    return (
        <>
         {/* <Header/> */}
          <Routes>
        <Route element={<Home/>} path='/' exact={true}/>
     </Routes>
        
        </>
      
    )
    
}


export default RouterF;