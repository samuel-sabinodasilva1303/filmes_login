import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

import '../components/Navbar.css';

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
      <Link to="/">
        <BiCameraMovie /> Filmes.com
      </Link>
      </h2>

       <Link to="/">
        <FaHome size={24} />
       </Link>

       <Link to="/LoginPage">
        <FaUserAlt size={24} onClick={handleLogout} />
       </Link>
      
       <Link to="/LoginPage">
        <FaSignInAlt size={24} onClick={handleLogout} />
       </Link>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
     </nav>

  );
};

export default Navbar;
