import "../styles/HomePage.css";
import React, { useEffect } from "react";
import { filterByCat, getDoctorData } from "../Redux/Action";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";




const category = ["", "ENT", "Gynecologist", "General Physician", "gastroenterologist", "Cardiologist", "dentist", "Dermatologist"];

export const HomePage = () =>
{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  
  useEffect(() => {
  
    dispatch(getDoctorData());
  }, [dispatch]);
  


  const handleFilter = (e) => {
  

    dispatch(filterByCat(e.target.value));
  };

  const handleCardClick = (id) => {
    navigate(`/doctors/${id}`);
  };
    return(
        
            <>
              <div className="nav">
                   <h1 style={{fontSize: 28}}>MEDINOVA</h1>

                   <select className="cat" onChange={handleFilter}>
                                  {
                          /* map through the filter  */
                          category.map((el, index) => {
                            return <option key={index}>{el}</option>;
                          })
                        }
                   </select>
                   
                   <input placeholder="Search by name or clinic" className="search"/>

                   <button className="login">Login</button>

                   <button className="signup">Sign Up</button>
               </div>

               <div>
               {
          /* map throught th movie list and display the results */
          state.filteredData.map((el) => (
            <div  onClick={()=>handleCardClick(el.id)} className="container">
              <div>
              {/* <img src={el.img} alt="" /> */}
              </div>
              
              <div>
                  <h4>Name: {el.firstName} {el.lastName}</h4>
                   
                  <h4>Appointment Fee: {el.fees} Rs</h4>
                  <p>specialist: </p><span>{el.Speciality}</span>

              </div>
            </div>
          ))
        }
               </div>
            </>
        
    )
}



