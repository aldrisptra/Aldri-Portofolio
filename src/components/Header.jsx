import profilePicture from "../assets/Aldri-2.jpg";
import "../styles/Header.css";

function header() {
  return (
    <header id="header">
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Muhammad Aldri</h3>
        <p>Mahasiswa</p>
        <div className="action-buttons">
          <a
            href="https://www.instagram.com/aldrisptra"
            target="_blank"
            rel="noopener noreferrer"
            className="btncv"
          >
            Cv
          </a>
          <a
            href="#kontak"
            onClick={() => setMenuActive(false)}
            className="btnkontak"
          >
            Kontak
          </a>
        </div>
      </div>
    </header>
  );
}

export default header;
