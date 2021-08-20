import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";

const Navbar = () => {
  //const { profile } = useAppSelector((state) => state.playlist);
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
      }
    }
    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });
    return () => {
      closeBtn.removeEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange(); //calling the function(optional)
      });
    };
  }, []);

  // following are the code to change sidebar button(optional)

  return (
    <nav className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-spotify"></i>
        <div className="logo_name">Generasi Gigih</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="link">
            <i className="bx bx-log-in"></i>
            <span className="links_name">Login</span>
          </Link>
          <span className="tooltip">Login</span>
        </li>
        <li>
          <Link to="/createplaylist" className="link">
            <i className="bx bxs-playlist"></i>
            <span className="links_name">Playlist</span>
          </Link>
          <span className="tooltip">Playlist</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
