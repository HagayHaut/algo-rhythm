import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 30px;
  width: 40%;
  justify-content: space-around;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  height: 30px;
  color: #fefefe;
  background-color: #131313;
`;

const H3 = styled.h3`
  cursor: pointer;
  font-size: 17px;
  padding: 4px;
`;

const Logo = styled.p`
  margin-bottom: 4px;
  margin-left: 15px;
  margin-right: 15px;
  font-family: "Modak";
  font-size: 23px;
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

function NavBar({ onLogout, user, onDarkModeClick, isDarkMode }) {
  return (
    <HeaderContainer>
      <LeftHeader>
        <Logo>algoDB!</Logo>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </LeftHeader>
      <NavContainer>
        <H3 onClick={onLogout}>Logout</H3>
        <Link to="/new" style={linkStyle}>
          <H3>New</H3>
        </Link>
        <Link to="/challenges" style={linkStyle}>
          <H3>Explore</H3>
        </Link>
        <Link to="/" style={linkStyle}>
          <H3>{user.username}</H3>
        </Link>
      </NavContainer>
    </HeaderContainer>
  );
}

export default NavBar;
