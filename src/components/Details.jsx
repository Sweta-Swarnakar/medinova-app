import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClickedDoctorData } from "../Redux/Action";
import { useEffect, useState } from "react";
import "../styles/Details.css"

export const Details = () => {
  const dispatch = useDispatch();
  
  
  const current = new Date();
  const currentTime = `${current.getHours()}`;

  
  const state = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
   
    dispatch(getClickedDoctorData(params.id));
  }, []);

   

   
   
   
  return (
    <>
     
      <h1></h1>;
      <div >
        <div className="imgBox">
          <img
            src={state.selectedData.img}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
        <div className="infoBox">
          <h1>{state.selectedData.firstName} {state.selectedData.lastName}</h1>
          {state?.selectedData?.category &&
            state.selectedData.category
              .trim()
              .split("|")
              .map((el, index) => (
                <p key={index}>
                  {el}
                </p>
              ))}
          <p>
            <b>Experince:</b> {state.selectedData.exp}
          </p>
          <p>
            <b>Degree:</b> {state.selectedData.degree}
          </p>

          <p>
            <b>Time:</b> {state.selectedData.startTime} to {state.selectedData.endTime} (24 hours Format)
          </p>
          {
            // if(currentTime >= {state.selectedData.startTime} && currentTime < state.selectedData.endTime)
            
              <button>Book Appointment</button>
            
          }
          
          
        
          
        </div>
      </div>
    </>
  );
};
