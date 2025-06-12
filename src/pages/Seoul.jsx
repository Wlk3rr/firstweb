import { Link } from 'react-router-dom';
import bgS from "../assets/img/seoul.png"
import Pomodoro from '../components/Pomodoro'
import Time from '../components/time';
import logo from "../assets/img/Group 1.svg"


const Seoul = () => {
return (
<div className="wrapper Korean" style={{backgroundImage: `url(${bgS})`}}>
 <div className='Wrapflex'>
    <div className="Wrapflex-left">
     <Link to="/"><img src={logo} alt="" /></Link>
       <Time/>
          <Link to="/Moscow">다른 세계로 여행하기</Link>
        
    </div>
    <div>
     <Pomodoro Working="말 줄이고 손부터." Breaking="조금 멈춰야, 멀리 간다." className = "pomodod" radioSRC="https://boxradio-edge-00.streamafrica.net/kpop" />
   
  
    </div>
  </div>

</div>
)
}

export default Seoul
