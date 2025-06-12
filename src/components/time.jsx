import { useEffect, useState } from 'react';
import '../Style/time.css';

const Time = () => {

  const [time, nxTime] = useState(new Date());
   useEffect(() => {
    const interval = setInterval(() => nxTime(new Date()), 1000);
    return () => clearInterval(interval); 
  }, []);
const hours = ((time.getHours() % 12) + time.getMinutes() / 60) * 30;
const minutes = time.getMinutes()* 6;
const seconds = time.getSeconds()* 6;



   return (
   
    <div class="clock">
        <div class="wrap">
            <span class="hour" style={{ transform: `rotate(${hours}deg)` }}></span>
            <span class="minute" style={{ transform: `rotate(${minutes}deg)` }} ></span>
            <span class="second" style={{ transform: `rotate(${seconds}deg)` }}></span>
            <span class="dot"></span>
        </div>
    </div>
  )
}

export default Time