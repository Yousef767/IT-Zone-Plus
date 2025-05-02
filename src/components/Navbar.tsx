import { useEffect, useRef, } from "react";
import { Link,NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const nav = useRef<HTMLDivElement>(null);
  const drop = useRef<HTMLDivElement>(null);

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

  const toggleDrop = () => {
    drop.current?.classList.toggle("active");
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
                <NavLink to={`/`} className={`link`}>
                  Home
                </NavLink>
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
