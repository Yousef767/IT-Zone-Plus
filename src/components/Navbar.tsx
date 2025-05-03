import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const nav = useRef<HTMLDivElement>(null);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setTimeout(() => {
      if (nav.current) {
        nav.current?.classList.remove("activeMenu");
      }
    }, 500);
  }, [pathname]);

  const toggleNav = () => {
    nav.current?.classList.toggle("activeMenu");
  };

  const toggleDrop = (event: React.MouseEvent<HTMLLIElement>) => {
    event.currentTarget.classList.toggle("active");
  };
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path ? "active" : "";
    }
    if (pathname.includes(path)) {
      return "active";
    }
    return "";
  };
  return (
    <nav ref={nav}>
      <div className="box f-s">
        <Link to="" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>

        <div className="links">
          <div className="ls">
            <ul className="mainLinks">
              <li>
                <Link to={`/`} className={`link ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li className={`drop`} onClick={toggleDrop}>
                <button className={`link ${isActive("majors")}`}>
                  Majors <i className="fa-regular fa-angle-down"></i>
                </button>
                <div className="dropMenu">
                  <Link to={`/major`}>Major</Link>
                </div>
              </li>
              <li className={`drop`} onClick={toggleDrop}>
                <button className={`link ${isActive("students")}`}>
                  Students <i className="fa-regular fa-angle-down"></i>
                </button>
                <div className="dropMenu">
                  <Link to={`/students`}>Students</Link>
                </div>
              </li>
              <li className={`drop`} onClick={toggleDrop}>
                <button className={`link ${isActive("guide")}`}>
                  Guide <i className="fa-regular fa-angle-down"></i>
                </button>
                <div className="dropMenu">
                  <Link to={`/guide`}>Guide</Link>
                </div>
              </li>
              <li>
                <Link to={`/shop`} className={`link`}>
                  <span className="navBtn"> Shop now!</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="last">
          <button className="menu" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
