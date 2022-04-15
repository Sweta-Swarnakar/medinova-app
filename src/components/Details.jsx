import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClickedDoctorData } from "../Redux/Action";
import { useEffect, useState } from "react";
import "../styles/Details.css"
import axios from "axios";

export const Details = () => {
  const dispatch = useDispatch();
  
  var slotCount = 0
  const current = new Date();
  const currentTime = `${current.getHours()}`;

  
  const state = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
   
    dispatch(getClickedDoctorData(params.id));
  }, []);

  const handleBook = async(start, end, slots) =>
  {
   
      if(currentTime >= start && currentTime < end && slots <= 9)
      {
         
        
        var temp = Number(slots)
      
        slotCount = temp - 1
        try {
          const response = await axios.patch(`http://localhost:3000/doctors/${params.id}`, { slots: slotCount });
          console.log('👉 Returned data:', response.data);
          window.alert(`Booking confirmed. Slots left : ${response.data.slots}`)
         
        } catch (e) {
          console.log(`😱 Axios request failed: ${e}`);
        }
      }

      else if(currentTime < start)
      {
        window.alert(`Doctor will be available at ${start}`)
        return;
      }

      else if(currentTime >= end)
      {
        window.alert(`Sorry doctor left at ${end}`)
        return
      }

     
      
  }

   

   
   
   
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
            
            <button className="appointment"  onClick={(e) => handleBook( state.selectedData.startTime, state.selectedData.endTime, state.selectedData.slots)}>Book Appointment</button>
            
          }
          
          
        
          
        </div>
      </div>
    </>
  );
};
