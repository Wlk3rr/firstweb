import { Link } from 'react-router-dom';
import '../Style/Home.css';
import bg from "../assets/img/lofi.jpg"
import logo from "../assets/img/Group 1.svg"

const Home = () => {
 
 
 
 
  return (
    <div className='wrapper' style={{backgroundImage:  `url(${bg})`}}>
    <div class="container">
    <header class="header">
     <Link to="/"><img src={logo} alt="" /></Link>
    </header>

    <main class="cards" id="rg1">
      <div class="card">
        <h2>Japan</h2>
        <h3>東京</h3>
      <Link to="/Tokyo">Feel the city</Link>
      </div>

      <div class="card">
        <h2>Armenia</h2>
        <h3>ԵՐԵՎԱՆ</h3>
        <Link to="/Yerevan">Feel the city</Link>
      </div>

      <div class="card" >
        <h2>Russia</h2>
        <h3>Москва</h3>
    <Link to="/Moscow">Feel the city</Link>
      </div>

      <div class="card">
        <h2>Korea</h2>
        <h3>서울</h3>
    <Link to="/Seoul">Feel the city</Link>
      </div>
    </main>
  </div>
  </div>
  )
}

export default Home