import "../styles/Navbar.css";
import { TfiMenu } from "react-icons/tfi";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  // Deteksi klik di luar menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuActive &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">
            Muhammad <span>Aldri</span> Saputra
          </a>
        </div>

        <button ref={buttonRef} onClick={() => setMenuActive(!menuActive)}>
          <TfiMenu />
        </button>

        <div ref={menuRef} className={`menu ${menuActive ? "tampil" : ""}`}>
          <ul>
            <li>
              <a href="#header" onClick={() => setMenuActive(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuActive(false)}>
                Tentang
              </a>
            </li>
            <li>
              <a href="#portofolio" onClick={() => setMenuActive(false)}>
                Proyek
              </a>
            </li>
            <li>
              <a href="#exprience" onClick={() => setMenuActive(false)}>
                Pengalaman
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
