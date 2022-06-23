import globe from "../images/globe.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={globe} className="header--image" alt="katie" />
        <p>my travel journal</p>
      </nav>
    </header>
  );
}

export default Header;
