import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import co1 from "../../Assets/co1.png";
import co2 from "../../Assets/co2.png";
import co3 from "../../Assets/co3.png";
import co4 from "../../Assets/co4.png";
import b1 from "../../Assets/b1.jpg";
import j1 from '../../Assets/j1.jpeg';
import Sc2 from './Sc2';

export default function Sc1() {
  return (
    <Styles>
      {/* Hero Section Banner */}
      <HeroOuterContainer fluid>
        <Container>
          <HeroSection>
            <TextCol xs={12} md={6}>
              <MainHeading>Safe and Reliable Delivery & Logistics Solutions</MainHeading>
              <SubHeading>
                Providing flexible, improved service levels, and accelerated pet delivery with utmost care!
              </SubHeading>
            </TextCol>
            <ImageCol xs={12} md={6}>
              <HeroImage src={j1} alt="Logistics Network Overview" />
            </ImageCol>
          </HeroSection>
        </Container>
      </HeroOuterContainer>

      {/* Feature Value Grid Props Section */}
      <Container>
        <FeatureSection>
          <Col xs={12} sm={6} lg={3}>
            <Card>
              <img src={co1} className="icon" alt="Efficient Delivery" />
              <h3>Efficient Pet Delivery</h3>
              <p>
                We enhance our logistics operations to ensure safe and efficient delivery of cargo, relieving you of worries.
              </p>
              <a href="/summary" className="learn-more">Learn More</a>
            </Card>
          </Col>
          
          <Col xs={12} sm={6} lg={3}>
            <Card>
              <img src={co2} className="icon" alt="Transparent Pricing" />
              <h3>Transparent Pricing</h3>
              <p>
                Our transparent pricing model ensures there are no hidden costs, even for specialized pet cargo services.
              </p>
              <a href="/summary" className="learn-more">Learn More</a>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card>
              <img src={co3} className="icon" alt="Security For Pets" />
              <h3>Secure Pet Handling</h3>
              <p>
                Our facilities meet high security requirements, ensuring your pets are handled with the utmost care.
              </p>
              <a href="#" className="learn-more">Learn More</a>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card>
              <img src={co4} className="icon" alt="Warehouse Storage" />
              <h3>Safe Storage</h3>
              <p>
                We offer specialized storage solutions for goods, ensuring their safety and comfort while in our care.
              </p>
              <a href="#" className="learn-more">Learn More</a>
            </Card>
          </Col>
        </FeatureSection>

        {/* Detailed Marketing Info Section */}
        <InfoSection>
          <Col xs={12} md={6} className="d-flex justify-content-center align-items: center">
            <StyledImage src={b1} alt="Averitte Express Logistics Solutions" />
          </Col>
          
          <Col xs={12} md={6}>
            <InfoHeading>
              Safe, Reliable, and Express Delivery & Transport Solutions That Save Your Time!
            </InfoHeading>
            <InfoText>
              Averitte Express is a leading logistics operator specializing in the safe and efficient delivery of goods. We provide a full range of services in customs clearance and transportation worldwide for pets and any type of cargo.
              <br /><br />
              Our commitment to delivering the best transport and shipping services extends to our pet delivery solutions. Our skilled personnel, utilizing the latest tracking software combined with decades of experience, ensure your pets are transported safely.
            </InfoText>
            <CustomList>
              <li>Real-Time Tracking</li>
              <li>24/7 Hours Support</li>
              <li>Easy Payment Methods</li>
              <li>Fast & Efficient Delivery</li>
            </CustomList>
          </Col>
        </InfoSection>
      </Container>

      {/* Subsequent Landing Screen Segment */}
      <Sc2 />
    </Styles>
  );
}

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const Styles = styled.div`
  overflow-x: hidden;
  background-color: #fcfcfc;
`;

const HeroOuterContainer = styled(Container)`
  background-color: #7f1d1d;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`;

const HeroSection = styled(Row)`
  align-items: center;
  justify-content: center;
`;

const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 767px) {
    text-align: center;
    align-items: center;
  }
`;

const MainHeading = styled.h1`
  color: #f8fafc;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: 992px) {
    font-size: 2.8rem;
  }
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

const SubHeading = styled.h2`
  color: #e2e8f0;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 0;
  max-width: 540px;

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin-top: 2.5rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 550px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
`;

const FeatureSection = styled(Row)`
  margin: -3rem 0 4rem 0;
  position: relative;
  z-index: 5;
  gap: 0;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 2.5rem 1.75rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(127, 29, 29, 0.12);
  }

  .icon {
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #1e293b;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .learn-more {
    color: #7f1d1d;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    border-bottom: 2px solid #ef4444;
    padding-bottom: 2px;
    transition: color 0.2s ease;

    &:hover {
      color: #ef4444;
    }
  }
`;

const InfoSection = styled(Row)`
  padding: 4rem 0;
  align-items: center;
  gap: 3rem;

  @media (max-width: 767px) {
    padding: 2rem 0;
    gap: 2rem;
  }
`;

const InfoHeading = styled.h2`
  color: #1e293b;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const InfoText = styled.p`
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const CustomList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  li {
    padding-left: 28px;
    position: relative;
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;

    &::before {
      content: "✓";
      color: #dc2626;
      font-size: 18px;
      font-weight: 900;
      position: absolute;
      left: 0;
      top: -2px;
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 540px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;