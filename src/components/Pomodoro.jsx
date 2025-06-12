import React, { useEffect, useRef, useState } from 'react';
import '../Style/Pomodoro.css';
import Musicplay from '../components/Music';



const Pomodoro = ({ Working, Breaking, radioSRC}) => {
  const [minutes, Setminutes] = useState(25);
  const [Secondas, Setsecondas] = useState(0);
  const [Works, Setwork] = useState(false); // աշխատանք
  const [Work, Nowork] = useState(true);    // առդյոք պաուզայա?
  const moment = useRef(null);

  const togglebtn = () => {
    Setwork(!Works);
  };


const resetbtn = () => {
  clearInterval(moment.current); 
  Setwork(false);
  Setminutes(25);    
  Setsecondas(0);
  Nowork(true);
};

  useEffect(() => {
    if (Works) {
      moment.current = setInterval(() => {
        if (Secondas > 0) {
          Setsecondas(sec => sec - 1);
        } 
        else if (minutes > 0) {
          Setminutes(min => min - 1);
          Setsecondas(59);
        }
         else {
          clearInterval(moment.current);
          Setwork(false);

          if (Work) {
            Setminutes(5);
            Nowork(false);
          } 
          else {
            Setminutes(25);
            Nowork(true);
          }

          Setsecondas(0);
        }
      }, 1000);
    }

    return () => clearInterval(moment.current);
  }, [Works, Secondas, minutes, Work]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className='pomodod'>
      <p>{Work ? Working : Breaking}</p>
      <div className='Clocker'>{formatTime(minutes)}:{formatTime(Secondas)}</div>
      <div className='controls'>
        <button onClick={togglebtn}>{Works ? 'Pause' : 'Run'}</button>
        <button onClick={resetbtn}>Reset</button>
        
      </div>
      <Musicplay 
      src={radioSRC}
      />
    </div>
  );
};

export default Pomodoro;


