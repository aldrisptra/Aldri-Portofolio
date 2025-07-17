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
                <a href="https://www.instagram.com/aldrisptra" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
                <a href="https://wa.me//085246316364" target="_blank" rel="noopener noreferrer"><ImWhatsapp /></a>
                <a href="https://www.facebook.com/mhmmd.a.sptra.9" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
        </div>
    </header>
  )
}

export default header