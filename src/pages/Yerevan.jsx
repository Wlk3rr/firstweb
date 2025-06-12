import { Link } from 'react-router-dom';
import bgY from "../assets/img/yerevan.png"
import Pomodoro from '../components/Pomodoro';
import Time from '../components/time';
import logo from "../assets/img/Group 1.svg"
const Yerevan = () => {
  return (
    <div className="wrapper Yerevan" style={{backgroundImage: `url(${bgY})`}} >
        <div className='Wrapflex'>
            <div className="Wrapflex-left">
                  <Link to="/"><img src={logo} alt="" /></Link>
               <Time/>
                  <Link to="/Tokyo">Ճամփորդել աշխարհով մեկ</Link>
            </div>
            <div>
              <Pomodoro Working="Հարցը ցանկությունը չի, այլ քայլը։" Breaking="Դու դեռ քեզ պետք ես։ Հանգստացի՛ր։"  className = 'pomodod' radioSRC ="https://c7.radioboss.fm:8299/stream"/>
            </div>
          </div>
        
    </div>
  )
}

export default Yerevan

// https://c7.radioboss.fm:8299/stream