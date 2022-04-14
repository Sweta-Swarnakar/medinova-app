import "../styles/HomePage.css";
import React, { useEffect } from "react";
import { filterByCat, getDoctorData } from "../Redux/Action";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searching } from "../Redux/Action";




const category = ["", "ENT", "Gynecologist", "General Physician", "Gastroenterologist", "Cardiologist", "Dentist", "Dermatologist"];

export const HomePage = () =>
{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const state = useSelector((state) => state);
  
  useEffect(() => {
  
    dispatch(getDoctorData());
  }, [dispatch]);

  function searchByTerm(term) {
    term = term.trim();
    dispatch(searching(term));
  }
  


  const handleFilter = (e) => {
  

    dispatch(filterByCat(e.target.value));
  };

  const handleCardClick = (id) => {
    navigate(`/doctors/${id}`);
  };
    return(
        
            <>
             <div className="secNav">
                <b style={{marginLeft: 30}}>Category: </b>    <select className="cat" onChange={handleFilter}>
                              {
                        /* map through the filter  */
                        category.map((el, index) => {
                          return <option key={index}>{el}</option>;
                        })
                      }
                    </select>
                
                  <input placeholder="Search by name or clinic" className="search"  onChange={(e) => searchByTerm(e.target.value)}/>
             </div>

               <div>
               {
          /* map throught th movie list and display the results */
          state.filteredData.map((el) => (
            <div  className="container">
              <div className="img">
                <img src={el.img} alt="" />
              </div>
              
              <div className="info">
                  <h4>Name: {el.firstName} {el.lastName}</h4>
                   
                  <p>Apointment Fees: {el.fees} Rs</p>
                  <p>Clinic: {el.Clinic}</p>
                  <p>Specialist: {el.speciality}</p>

              </div>

              <div>
                <button  onClick={()=>handleCardClick(el.id)} className="detailButton">View Details</button>
                </div>
              
            </div>
          ))
        }
               </div>
            </>
        
    )
}



