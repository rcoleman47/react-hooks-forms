import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function Parent() {
  const [firstName, setFirstName] = useState("Ryan");
  const [lastName, setLastName] = useState("Adams");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  return (
    <div>
      <Form firstName={firstName} 
      lastName={lastName} 
      handleFirstNameChange={handleFirstNameChange} 
      handleLastNameChange={handleLastNameChange} />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default Parent