import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import v1 from "../../Assets/v1.jpg";
import v2 from "../../Assets/v2.jpg";
import v3 from "../../Assets/v3.jpg";
import Team from "./Team";
import TestimonialSlider from "./Testimonials";
import Sc3 from "./Sc3";
import vid from "../../Assets/vid.mp4";
import vid2 from "../../Assets/vid2.mp4";

export default function Sc2() {
  const cardData = [
    {
      imgSrc: v1,
      alt: "Warehouse Inventory Management",
      title: "Warehouse on Hand Inventory",
      description: "Averitte Express meticulously manages its warehouse on-hand inventory to ensure efficiency, accuracy, and seamless operations across both package and pet delivery pipelines."
    },
    {
      imgSrc: v2,
      alt: "Minimize Manufacturing Costs",
      title: "Minimize Cost of Manufacturing",
      description: "Averitte Express strategically reduces supply chain overhead costs through network innovation, ensuring highly competitive shipping rates for your specialized logistics."
    },
    {
      imgSrc: v3,
      alt: "Documents & Electronic Data Tracking",
      title: "Documents & Electronic Data",
      description: "We exemplify efficiency in managing secured documentation and real-time electronic data through robust systems custom-tailored to the complexities of global transportation."
    }
  ];

  const additionalArticles = [
    {
      title: "Efficient Last-Mile Delivery Solutions",
      description: "Discover how Averitte Express optimizes last-mile delivery to reduce transit costs and sustainably improve custom user satisfaction metrics."
    },
    {
      title: "Technological Advances in Delivery",
      description: "Exploring the latest hardware integrations and system tracking tools that keep Averitte Express at the forefront of logistical engineering."
    },
    {
      title: "Eco-Friendly Packaging Initiatives",
      description: "Learn about our company-wide operational commitment to sustainability through high-durability green shipping containers and eco-packaging."
    }
  ];

  return (
    <StylesSectionWrapper>
      {/* Primary Informational Service Cards */}
      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {cardData.map((card, index) => (
            <Col xs={12} md={6} lg={4} key={`service-card-${index}`}>
              <ServiceCard>
                <img src={card.imgSrc} alt={card.alt} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <a href="/summary" className="card-button" aria-label={`Read more about ${card.title}`}>
                    Read More
                  </a>
                </div>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Supplemental Delivery Articles Grid */}
      <ArticleSectionBG fluid>
        <Container>
          <SectionTitle>More Articles on Delivery Innovations</SectionTitle>
          <Row className="g-4">
            {additionalArticles.map((article, index) => (
              <Col xs={12} md={4} key={`article-${index}`}>
                <ArticleCard>
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-description">{article.description}</p>
                  <a href="/summary" className="article-button">Read More</a>
                </ArticleCard>
              </Col>
            ))}
          </Row>
        </Container>
      </ArticleSectionBG>

      {/* Video Analytics Presentation A */}
      <Container className="my-5">
        <VideoRowWrapper className="align-items-center justify-content-center">
          <SectionTitle>Delivery Insights & Tips</SectionTitle>
          <Col xs={12} md={8} lg={6}>
            <StyledVideo controls preload="metadata">
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </Col>
        </VideoRowWrapper>
      </Container>

      {/* Hero Highlight CTA Segment */}
      <PromoHeroContainer>
        <PromoHeroContent>
          <span className="hero-badge">Your Package, Your Pet, Your Rules</span>
          <h2 className="hero-main-heading">
            The Best Possible Service In The Sphere Of Optimized Route Of Cargo, Pet, & Transportation Worldwide
          </h2>
          <button className="hero-button">Schedule an Appointment</button>
        </PromoHeroContent>
      </PromoHeroContainer>

      {/* Corporate Leadership Team Directory */}
      <TeamSectionWrapper fluid>
        <Container>
          <SectionTitle>Meet Our Management Team</SectionTitle>
          <Team />
        </Container>
      </TeamSectionWrapper>

      {/* Customer Testimonial Slider System */}
      <Container className="my-5 text-center">
        <SectionTitle>What they say about us</SectionTitle>
        <TestimonialSlider />
      </Container>

      {/* Video Analytics Presentation B */}
      <Container className="my-5">
        <VideoRowWrapper className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <StyledVideo controls preload="metadata">
              <source src={vid2} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledVideo>
          </Col>
        </VideoRowWrapper>
      </Container>

      {/* Step 3 Component Import Injection */}
      <Row className="mx-0">
        <Sc3 />
      </Row>
    </StylesSectionWrapper>
  );
}

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const StylesSectionWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #f8fafc;
`;

const SectionTitle = styled.h3`
  color: #1e293b;
  font-weight: 700;
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 2.5rem;
  width: 100%;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(127, 29, 29, 0.15);
  }

  .card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 4px solid #ef4444;
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: #7f1d1d;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .card-description {
    font-size: 0.95rem;
    color: #475569;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
  }

  .card-button {
    background-color: #ef4444;
    color: #ffffff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
    align-self: flex-start;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #dc2626;
      color: #ffffff;
    }
  }
`;

const ArticleSectionBG = styled(Container)`
  background-color: #ffffff;
  padding: 4rem 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

const ArticleCard = styled.div`
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  padding: 1.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
    border-color: #cbd5e1;
  }

  .article-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #7f1d1d;
    margin-bottom: 0.75rem;
  }

  .article-description {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    flex-grow: 1;
  }

  .article-button {
    color: #ef4444;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;

    &:hover {
      color: #7f1d1d;
    }
  }
`;

const VideoRowWrapper = styled(Row)`
  text-align: center;
  margin: 3rem 0;
`;

const StyledVideo = styled.video`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  outline: none;
  background-color: #000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.015);
  }
`;

const PromoHeroContainer = styled.div`
  background-color: #7f1d1d;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  position: relative;
`;

const PromoHeroContent = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  border-radius: 16px;
  max-width: 800px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  .hero-badge {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #fca5a5;
    display: block;
    margin-bottom: 1rem;
  }

  .hero-main-heading {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.4;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .hero-button {
    background-color: #ef4444;
    color: #ffffff;
    border: none;
    padding: 14px 32px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 700;
    transition: background-color 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      background-color: #dc2626;
    }
  }
`;

const TeamSectionWrapper = styled(Container)`
  background-color: #f1f5f9;
  padding: 4rem 0;
  border-bottom: 1px solid #e2e8f0;
`;