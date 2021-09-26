import React, { useState, useEffect } from 'react';
import Calendrier from './Calendar';


const Interval = () => {

    const date = new Date();
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [hours, setHours] = useState(date.getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            const dateInterval = new Date();
            setHours(dateInterval.getHours())
            setMinutes(dateInterval.getMinutes());
            setSeconds(dateInterval.getSeconds());          
        }, 1000);

        return () => clearInterval(interval);
    },[]);
        return (
        <div >
            <header >
                <span>Heure locale  {hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</span>
                <hr/>
                <br/>
              <Calendrier />
            </header>
        </div>
    );
};
export default Interval;