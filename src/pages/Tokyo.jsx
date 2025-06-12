import { Link } from 'react-router-dom';
import '../Style/Tokyo.css';
import image from '../assets/img/tokyo.png'
import Pomodoro from '../components/Pomodoro';
import Time from '../components/time';
import logo from "../assets/img/Group 1.svg";



const Tokyo = () => {
return (
<div className="wrapper Japan" style={{backgroundImage: `url(${image})`}}>

  <div className='Wrapflex'>
    <div className="Wrapflex-left">
        <Link to="/"><img src={logo} alt="" /></Link>
       <Time/>
        <Link to="/Seoul">別の世界へ旅する </Link>
    </div>
    <div>
      <Pomodoro Working="できるかじゃない。やるかどうかだ。" Breaking="休むのも、進むためだ。"  className = 'pomodod' radioSRC="https://cast1.torontocast.com:2120/;"/>
    </div>
  </div>
</div>
)
}

export default Tokyo