import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Sorter() {
  
      
    
  return (
     

    <>
  <DropdownButton id="dropdown-basic-button" title="Class">
  <Dropdown.Item href="#/#">Kickboxing</Dropdown.Item>
  <Dropdown.Item href="#/#">Boxing</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button" title="Intensity">
  <Dropdown.Item href="#/#">Low</Dropdown.Item>
  <Dropdown.Item href="#/#">Medium</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button" title="Duration">
  <Dropdown.Item href="#/#">30 Minutes</Dropdown.Item>
  <Dropdown.Item href="#/#">45 Minutes</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Distance">
  <Dropdown.Item href="#/#">Kickboxing</Dropdown.Item>
  <Dropdown.Item href="#/#">Boxing</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Time">
  <Dropdown.Item href="#/#">7:00 am</Dropdown.Item>
  <Dropdown.Item href="#/#">9:00 am</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Date">
  <Dropdown.Item href="#/#">August 2nd</Dropdown.Item>
  <Dropdown.Item href="#/#">August 3rd</Dropdown.Item>
</DropdownButton>

    </>
  );
}
