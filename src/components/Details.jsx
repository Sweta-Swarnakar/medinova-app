import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClickedDoctorData } from "../Redux/Action";
import { useEffect, useState } from "react";
import "../styles/Details.css";
import axios from "axios"


export const Details = () => {
  const dispatch = useDispatch();
  
  
  const current = new Date();
  var currentTime = `${current.getHours()}`;

  var slotCount = 0

  
  const state = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
   
    dispatch(getClickedDoctorData(params.id));
  }, []);

  const handleBook = async(start, end, slots) =>
  {
      if(currentTime >= start && currentTime < end && slots <= 15)
      {
        var temp = Number(slots)
       // console.log(typeof(temp))
        slotCount = temp - 1
        try {
          const response = await axios.patch(`http://localhost:3000/doctors/${params.id}`, { slots: slotCount });
          console.log('👉 Returned data:', response.data);
         
        } catch (e) {
          console.log(`😱 Axios request failed: ${e}`);
        }
        window.alert("Booking confirmed")
      }

      else if(currentTime < start)
      {
        window.alert(`Doctor will be available at ${start}`)
        return;
      }

      else if(currentTime > end)
      {
        window.alert(`Sorry doctor left at ${end}`)
        return
      }

     
      
  }

   

   
   
   
  return (
    <>
     
      <h1>Doctor's Details Page</h1>;
      <div >
        <div className="imgBox">
          <img
            src={state.selectedData.img}
            alt=""
            
          />
        </div>
        <div className="infoBox">
          <h1>{state.selectedData.firstName} {state.selectedData.lastName}</h1>
         
          <p>
            <b>Experince:</b> {state.selectedData.exp}
          </p>
          <p>
            <b>Degree:</b> {state.selectedData.degree}
          </p>

          <p>
            <b>Time:</b> {state.selectedData.startTime} to {state.selectedData.endTime} (24 hours Format)
          </p>

          <p>
            <b>Avaible Slots:</b> {state.selectedData.slots}
          </p>
         
            
              <button className="appointment"  onClick={(e) => handleBook( state.selectedData.startTime, state.selectedData.endTime, state.selectedData.slots)}>Book Appointment</button>
          
          
          
          
        
          
        </div>
      </div>
    </>
  );
};
