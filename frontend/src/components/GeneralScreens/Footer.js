import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Envelope, GeoAlt } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Row className="gy-4 py-4">
          {/* Brand/About Segment */}
          <Col xs={12} md={5} lg={4}>
            <FooterSection>
              <FooterLogo>Averitt Express</FooterLogo>
              <FooterDescription>
                A distinguished global logistics network meticulously executing modern supply chain controls. 
                We handle premium freight forwarding and specialized live pet logistics with unparalleled safety standards.
              </FooterDescription>
              <LocationBlock>
                <GeoAlt size={16} className="me-2 text-danger" />
                <span>Oaks Blvd, Florida</span>
              </LocationBlock>
            </FooterSection>
          </Col>

          {/* Quick Nav Directory */}
          <Col xs={6} md={3} lg={{ span: 3, offset: 1 }}>
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <LinkList>
                <li><FooterLink to="/">Home</FooterLink></li>
                <li><FooterLink to="/about">About Us</FooterLink></li>
                <li><FooterLink to="/tracking">Track Package</FooterLink></li>
                <li><FooterLink to="/meet-the-team">Meet The Team</FooterLink></li>
                <li><FooterLink to="/summary">Delivery Summary</FooterLink></li>
              </LinkList>
            </FooterSection>
          </Col>

          {/* Corporate Connect/Social Elements */}
          <Col xs={6} md={4} lg={4}>
            <FooterSection>
              <FooterTitle>Connect With Us</FooterTitle>
              <SocialIcons>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61590373607484" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61590373607484" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/profile.php?id=61590373607484" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </SocialIcon>
              </SocialIcons>
            </FooterSection>
          </Col>
        </Row>
      </Container>

      <FooterBottom>
        <Container>
          <p className="mb-0">&copy; {currentYear} Averitte Express. All rights reserved.</p>
        </Container>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const FooterContainer = styled.footer`
  background-color: #0f172a; /* Deep elegant slate midnight blue */
  color: #cbd5e1;
  border-top: 4px solid #b91c1c;
  font-family: system-ui, -apple-system, sans-serif;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FooterLogo = styled.div`
  font-family: 'Cinzel', 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 2px;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 1.25rem;
`;

const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 30px;
    height: 2px;
    background-color: #ef4444;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  li {
    margin-bottom: 0.75rem;
  }
`;

const FooterLink = styled(Link)`
  font-size: 0.95rem;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    color: #ef4444;
    transform: translateX(4px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #94a3b8;
  background-color: rgba(255, 255, 255, 0.03);
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: #ef4444;
    border-color: #ef4444;
    transform: translateY(-3px);
  }
`;

const EmailContact = styled.a`
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s ease;
  align-self: flex-start;

  &:hover {
    color: #ef4444;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  background-color: #020617; /* Darker bottom bounding background */
  font-size: 0.85rem;
  color: #64748b;
  border-top: 1px solid rgba(255, 255, 255, 0.02);
`;