import React from 'react';

const FormMsg = ({ location, temp }) => {
  return (
    <div className="text-center">
      <p>The current temperature in <strong>{location}</strong>, {temp.countryName} is <strong>{temp.main.temp}</strong></p>
    </div>
  )
}

export default FormMsg;