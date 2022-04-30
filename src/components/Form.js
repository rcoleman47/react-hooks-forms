import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange
}) {

  const [number, setNumber] = useState(0);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
    }
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="number" value={number} onChange={handleNumberChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
