import styled from "styled-components";
import { Link } from "react-router-dom";

// Main container for navigation (fixed navbar at the top)
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px; /* Adjusted padding for compact navbar */
  background-color: rgb(245, 251, 251); /* Vibrant background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow for better separation */
  height: 80px;
  position: fixed; /* Fixed navbar */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for background and shadow */

  &:hover {
        background-color: rgba(246, 251, 247, 0.53); /* Light background for mobile menu */

    box-shadow: 0 6px 12px rgba(118, 59, 59, 0.3); /* Stronger shadow on hover */
  }
`;

// Logo container (left side of the navbar)
export const LogoContainer = styled(Link)`
  font-size: 28px; /* Slightly larger font size for a more prominent logo */
  font-weight: 700; /* Increased boldness */
  color: white; /* White logo text */
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  flex-shrink: 0;

  .logo {
    width: 160px; /* Slightly larger logo */
    height: auto;
  }
`;

// Wrapper for navigation links (right side of the navbar)
export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns navigation items to the right */
  align-items: center;
  width: auto;
  position: relative;
  z-index: 1000;
`;

// Hamburger icon for mobile view
export const HamburgerIcon = styled.div`
  font-size: 32px; /* Larger for easier tapping */
  cursor: pointer;
  display: none;
  color: black;

  @media (max-width: 768px) {
    display: block;
    &:hover {
      color: rgb(6, 6, 4); /* Golden hover effect */
    }
  }
`;

// Close icon for mobile menu
export const CloseIcon = styled.div`
  font-size: 50px;
  cursor: pointer;
  display: none;
  color: black;

  @media (max-width: 768px) {
    display: block;
    &:hover {
      color: rgb(16, 16, 13); /* Golden hover effect */
    }
  }
`;

// Navigation links container (for mobile and desktop)
export const NavLinksContainer = styled.div`
  display: flex;
  gap: 30px; /* Increased gap for cleaner desktop layout */
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px; /* Space from the top (navbar height) */
    left: 0;
    right: 0;
    background-color: rgba(4, 114, 26, 0.95); /* Light background for mobile menu */
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    width: 100%;
    z-index: 999;
    transition: all 0.3s ease-in-out; /* Smooth transition for mobile menu */
  }
`;

// Individual NavLinks
export const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 25px;
  width: auto; /* Adjusted width to avoid full-width on desktop */
  text-align: center;
  background: transparent;
  border-radius: 8px;
  display: inline-flex; /* Ensures links stay inline and aligned */

  &:hover {
    color: rgb(22, 21, 16); /* Golden hover effect */
    background-color: rgba(236, 222, 23, 0.1); /* Light background effect */
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 12px 0;
    margin: 0;
  }
`;

// Cart Icon container for mobile view
export const CartLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

// Mobile menu wrapper (only visible on mobile when hamburger is clicked)
export const MobileMenuWrapper = styled.div`
  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: rgb(252, 254, 253); /* Light background with slight opacity */
    flex-direction: column;
    padding: 25px;
    z-index: 999;
    width: 100%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Stronger shadow for separation */
    transition: all 0.3s ease-in-out; /* Smooth transition for mobile menu */
  }
`;
