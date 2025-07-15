import profilePicture from '../assets/Aldri-2.jpg'
import '../styles/Header.css'
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

function header() {
  return (
    <header id='header'>
        <div className='header-jumbotron'>
            <img src={profilePicture} />
            <h3>Muhammad Aldri</h3>
            <p>Mahasiswa</p>
            <div className='socialMedia'>
                <a href=""><GrInstagram /></a>
                <a href=""><ImWhatsapp /></a>
                <a href=""><FaFacebook /></a>
            </div>
        </div>
    </header>
  )
}

export default header