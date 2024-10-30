import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faUser, faMagnifyingGlass, faStar, faSignOutAlt, faList } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { logOut } from '../../Reducers/ReducerAuth';
import { useDispatch } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  const [showDropdown, setShowDropdown] = useState(false);
  const wishlist = useSelector((state) => state.wishList || []);
  const cartlist = useSelector((state) => state.cart.items);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
    navigate("/login");
  };

  const isAuthPage = location.pathname === '/login';

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container-fluid mx-5 pt-3">
          <Link className="navbar-brand" to="/">Exclusive</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to='/about'>About</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link text-black" to='/signup'>Sign Up</Link>
              </li>
            </ul>
            <form className="d-flex position-relative" role="search">
              <input className="form-control position-relative me-3 my-search" type="search" placeholder="What are you looking for" aria-label="Search" />
              <div className="search-icon position-absolute">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color='black' />
              </div>
            </form>
            <ul className="navbar-nav mb-lg-0">
             
              {!isAuthPage && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link position-relative" to="/YourWishlist">
                      <FontAwesomeIcon icon={faHeartRegular} color='black' className='YourWishlist' style={{ fontSize: "23px" }} />
                      <span className='position-absolute'>{wishlist.length}</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link position-relative" to="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} size="1x" color='black' style={{ fontSize: "23px" }} />
                      <span className='position-absolute'>{cartlist.length}</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Dropdown
                      show={showDropdown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Dropdown.Toggle as="span" id="account-dropdown" className={`nav-link no-arrow user-icon ${showDropdown ? 'hover' : ''}`}>
                        <FontAwesomeIcon icon={faUser} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item as={Link} to="/account" className='custom-dropdown-item'> <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Manage My Account</Dropdown.Item>
                        <Dropdown.Item as={Link} to="" className='custom-dropdown-item'> <FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp;&nbsp;My Order</Dropdown.Item>
                        <Dropdown.Item as={Link} to="" className='custom-dropdown-item'><FontAwesomeIcon icon={faList} />&nbsp;&nbsp;&nbsp;My Cancellations</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings" className='custom-dropdown-item'><FontAwesomeIcon icon={faStar} />&nbsp;&nbsp;&nbsp;My Reviews</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={handleLogout} className='custom-dropdown-item'><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;&nbsp;Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
