import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  const { activeUser, loading } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const isAuthenticated = Boolean(activeUser?._id);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const closeNav = () => setExpanded(false);

  const navigationLinks = [
    { to: "/", label: "HOME" },
    { to: "/tracking", label: "TRACK" },
    ...(isAuthenticated ? [{ to: "/create-post", label: "NEW PACKAGE" }] : []),
    { to: "/about", label: "ABOUT" },
    { to: "/meet-the-team", label: "TEAM" },
    { to: "/summary", label: "INSIGHTS" },
  ];

  return (
    <HeaderStyles>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="main-navbar"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={closeNav}>
            <BrandLogo>AVERITT EXPRESS</BrandLogo>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" />

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto align-items-center">
              {loading ? (
                <LoadingSkeleton>Verifying session...</LoadingSkeleton>
              ) : (
                navigationLinks.map((link) => (
                  <StyledNavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeNav}
                    className={({ isActive }) => (isActive ? "active-route" : "")}
                  >
                    {link.label}
                  </StyledNavLink>
                ))
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderStyles>
  );
};

export default Header;

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;

  .main-navbar {
    background-color: #ffffff;
    border-bottom: 1px solid #fee2e2;
    box-shadow: 0 4px 20px rgba(127, 29, 29, 0.03);
    padding: 0.75rem 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar-toggle {
    border: none;
    background-color: #fef2f2;
    padding: 8px 12px;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
    }
  }
`;

const BrandLogo = styled.div`
  font-family: 'Cinzel', 'Times New Roman', serif;
  font-weight: 900;
  color: #1e293b;
  font-size: 1.6rem;
  letter-spacing: 3px;
  transition: color 0.25s ease;

  &:hover {
    color: #b91c1c;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
    letter-spacing: 1.5px;
  }
`;

const LoadingSkeleton = styled.div`
  font-size: 0.9rem;
  color: #ef4444;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  animation: pulse-glow 1.5s infinite ease-in-out;

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 700;
  color: #475569;
  margin-left: 2rem;
  padding: 0.5rem 0;
  letter-spacing: 1px;
  position: relative;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: #b91c1c;
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  &:hover {
    color: #b91c1c;
    
    &::after {
      width: 100%;
    }
  }

  &.active-route {
    color: #b91c1c;
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 6px;
    background-color: rgba(254, 242, 242, 0);

    &:hover {
      background-color: #fef2f2;
    }

    &.active-route {
      background-color: #fef2f2;
    }

    &::after {
      display: none;
    }
  }
`;