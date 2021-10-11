import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./mobileMenu.scss";

const MobileMenu = ({ open, handleClose }) => {
  return (
    <div className={`MobileMenu ${open ? "openMenu" : "closeMenu"}`}>
      <i className="fas fa-times close" onClick={() => handleClose()}></i>
      {/* <button className="close" onClick={() => handleClose()}>
        Close
      </button> */}
      <ul className="mobile-menu-list">
        <li className="mobile-menu-item home">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="mobile-menu-item login">
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li className="mobile-menu-item product">
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li className="mobile-menu-item collection">
          <Link className="link" to="/collection">
            Collection
          </Link>
        </li>

        <li className="mobile-menu-item blogs">
          <Link className="link" to="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};
MobileMenu.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default MobileMenu;
