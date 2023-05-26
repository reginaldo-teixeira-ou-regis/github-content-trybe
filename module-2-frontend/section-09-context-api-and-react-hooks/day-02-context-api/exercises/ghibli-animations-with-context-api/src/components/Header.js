import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <nav>
        {pathname === "/favorites" ? (
          <Link to="/">Films</Link>
        ) : (
          <Link to="/favorites">
            <div>Favorites</div>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
