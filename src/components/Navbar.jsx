import "./Navbar.css";

export default function Navbar({}) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img
            src="../assets/Icons/favicon.svg"
            alt="Morfale Logo"
            className="logo"
          ></img>
        </a>
      </div>
      <div className="navbar-right">
        <a href="/favorites" className="nav-item">
          <span className="nav-text">Favorite recipes</span>
          <img src="../assets/Icons/heart.svg" alt="Heart Icon"></img>
        </a>
        <a href="#" className="nav-item">
          <span className="nav-text">Random meals</span>
          <img src="../assets/Icons/repeat.svg" alt="Shuffle Icon"></img>
        </a>
      </div>
    </nav>
  );
}