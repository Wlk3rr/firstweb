import { Link } from 'react-router-dom';
import bgM from "../assets/img/moscow.png"
import Pomodoro from '../components/Pomodoro'
import Time from '../components/time';
import logo from "../assets/img/Group 1.svg"


const Moscow = () => {
return (
<div className="wrapper Russian" style={{backgroundImage: `url(${bgM})`}}>
 <div className='Wrapflex'>
    <div className="Wrapflex-left">
     <Link to="/"><img src={logo} alt="" /></Link>
       <Time/>
          <Link to="/Yerevan">Погрузись в другой мир</Link>
        
    </div>
    <div>
     <Pomodoro Working="Ты справишься. Как всегда." Breaking="Ты заслужил(а) этот чай. И печеньку." className = "pomodod" radioSRC = "https://rusradio.hostingradio.ru/rusradio96.aacp"  />
   
  
    </div>
  </div>

</div>
)
}

export default Moscow
