import {Details} from "../components/Details"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "../components/HomePage"
import { Login } from "../components/Login"
import { Signup } from "../components/Signup"


export const MainRoutes= ()=>{
    return(
        <>
          <Routes>
              
               <Route path="/" element={<HomePage/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/doctors/:id" element={<Details/>}/>

          </Routes>
        </>
    )
}