import React from "react";
import dummyData from "../dummyData";
import { useState, useEffect } from "react";
import Client from "./Client";


export default function Sorter() {
    const [data, setData] = useState(dummyData)
    const [classType, setClassType]= useState()
    const [time, setTime]= useState()
    const [name, setName] = useState()
    const [intensity, setIntensity]= useState()
    const [date, setDate]= useState()


console.log(data)

useEffect(() => {
const filtersToApply = [classType, time, name, intensity, date].filter(ele => !!ele)

setData(dummyData.filter((data) => {
    //first we want to get the items in the object
    const vals = Object.values(data)

    // then we want to see if all of the filtered items are in the values arr
    return filtersToApply.every((filteredItem) => {
        return vals.includes(filteredItem)
    }) === true

}))
},[classType, time, name, intensity, date])





  return (


    <div className= "dropdown">
       <select name="class_type" onChange={(event) => setClassType(event.target.value)}>
       <option value="">Class</option>
        <option name="class_type" value="Kickboxing">Kickboxing </option>
        <option name="class_type" value="Crossfit">Crossfit </option>
       </select>


       <select name="class_time" onChange={(event) => setTime(event.target.value)}>
       <option value="">Time</option>
        <option name="class_type" value="7:00 am">7:00am </option>
        <option name="class_type" value="9:00 am">9:00am </option>
       </select>




       <select name= "class_date" onChange={(event) => setDate(event.target.value)}>
       <option value="">Date</option>
        <option value="Aug 2">August 2nd </option>
        <option value="Aug 3">August 3rd</option>
       </select>



       <select name="class_duration" onChange={(event) => setTime(event.target.value)}>
       <option value="">Duration</option>
        <option value="30 Minutes">30 minutes</option>
        <option value="45 Minutes">45 minutes </option>
       </select>

       <select name="class_intensity_level" onChange={(event) => setIntensity(event.target.value)}>
       <option value="">Intensity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
       </select>



       <select name="class_name" onChange={(event) => setName(event.target.value)}>
       <option value="">Name</option>
        <option value="A Class">A Class</option>
        <option value="B Class">B Class</option>
        <option value="C Class">C Class</option>
        <option value="D Class">D Class</option>
        <option value="E Class">E Class</option>
        <option value="F Class">F Class</option>
        <option value="G Class">G Class</option>
       </select>
       
       <Client data={data} />
    </div>
        
        
       






   
  );
}
