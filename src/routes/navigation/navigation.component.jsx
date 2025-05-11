import React, { useState, Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  HamburgerIcon,
  CloseIcon,
  NavLinksWrapper,
  LogoContainer,
  MobileMenuWrapper,
  CartLinkWrapper,
} from "./navigation.styles";
import AboutUs from "../../components/Aboutt/aboutVyaapaar";
import OurVenture from "../../components/Our Ventures/ourVentures";
import { ReactComponent as USlogo } from "../../assets/urbanstyle-logo.svg";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen: contextCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle sign-out
  const handleSignOut = () => {
    signOutAuthUser();
    closeMobileMenu();
  };

  // Function to handle navigation and closing the menu
  const handleNavigation = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  // Toggle the Cart Dropdown visibility and close the mobile menu
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
    closeMobileMenu(); // Close the mobile menu when cart is toggled
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <USlogo className="logo" />
        </LogoContainer>

        {/* Desktop Menu */}
        <NavLinksWrapper className="desktop-menu">
          <NavLinksContainer>
            <NavLink to="/" onClick={() => handleNavigation("/")}>
              HOME
            </NavLink>
            <NavLink to="/OurVenture" onClick={() => handleNavigation("/OurVenture")}>
              OUR VENTURES
            </NavLink>
            <NavLink to="/aboutVyaapaar" onClick={() => handleNavigation("/aboutVyaapaar")}>
              ABOUT US
            </NavLink>
            <NavLink to="/shop" onClick={() => handleNavigation("/shop")}>
              PRODUCTS
            </NavLink>
            {currentUser && (
              <NavLink to="/orders" onClick={() => handleNavigation("/orders")}>
                ORDERS
              </NavLink>
            )}
            {currentUser ? (
              <NavLink as="span" onClick={handleSignOut}>
                LOG OUT
              </NavLink>
            ) : (
              <NavLink to="/auth" onClick={() => handleNavigation("/auth")}>
                SIGN UP
              </NavLink>
            )}
          </NavLinksContainer>
        </NavLinksWrapper>

        {/* Hamburger Icon (visible on mobile) */}
        <NavLinksWrapper className="mobile-menu">
          <CartLinkWrapper onClick={toggleCartDropdown}>
            <CartIcon />
          </CartLinkWrapper>
          <HamburgerIcon onClick={toggleMobileMenu}>
            {!isMobileMenuOpen ? "☰" : "×"}
          </HamburgerIcon>
        </NavLinksWrapper>

        {/* Mobile Menu */}
        <MobileMenuWrapper isMobileMenuOpen={isMobileMenuOpen}>
          {isMobileMenuOpen && (
            <>
              <NavLink to="/" onClick={() => handleNavigation("/")}>
                HOME
              </NavLink>
              <NavLink to="/OurVenture" onClick={() => handleNavigation("/OurVenture")}>
                OUR VENTURES
              </NavLink>
              <NavLink to="/aboutVyaapaar" onClick={() => handleNavigation("/aboutVyaapaar")}>
                ABOUT US
              </NavLink>
              <NavLink to="/shop" onClick={() => handleNavigation("/shop")}>
                PRODUCTS
              </NavLink>
              {currentUser && (
                <NavLink to="/orders" onClick={() => handleNavigation("/orders")}>
                  ORDERS
                </NavLink>
              )}
              {currentUser ? (
                <NavLink as="span" onClick={handleSignOut}>
                  LOG OUT
                </NavLink>
              ) : (
                <NavLink to="/auth" onClick={() => handleNavigation("/auth")}>
                  SIGN UP
                </NavLink>
              )}
            </>
          )}
        </MobileMenuWrapper>

        {/* Display CartDropdown when cart is open */}
        {(isCartOpen || contextCartOpen) && (
          <CartDropdown>
            <CloseIcon onClick={toggleCartDropdown}>×</CloseIcon>
          </CartDropdown>
        )}
      </NavigationContainer>

      {/* Routes and Outlet for page navigation */}
      <Routes>
        <Route path="aboutVyaapaar" element={<AboutUs />} />
        <Route path="OurVenture" element={<OurVenture />} />
      </Routes>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
