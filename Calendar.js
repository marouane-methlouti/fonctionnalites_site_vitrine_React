import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const Calendrier = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)

  function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: value
      }),
    }

    fetch("http://localhost:3000/routeDate", options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      });
  }

  return (
    <div className="calend">
      <Calendar
        onChange={onChange}
        value={value}
      />
      <br/>
    </div>
  );
}

export default Calendrier;