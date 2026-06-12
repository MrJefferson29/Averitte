import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import bo1 from '../../Assets/bo1.jpg';
import bo2 from '../../Assets/bo2.jpg';
import bo3 from '../../Assets/bo3.jpg';

function ArticleCard({ image, title, description }) {
  return (
    <CardWrapper>
      <ImageContainer>
        <img src={image} alt={title} className="article-image" />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink href="/summary">
          Know More &rarr;
        </CardLink>
      </CardContent>
    </CardWrapper>
  );
}

export default function Sc3() {
  const articles = [
    {
      image: bo1,
      title: "Cargo Flow Through Better Supply Chain Visibility Control",
      description: "Enhancing Cargo Flow: Transforming Logistics Through Better Supply Chain Visibility Control At Averitte Express..."
    },
    {
      image: bo2,
      title: "New Additions To Our Great Metro Trucks Fleet",
      description: "Exciting News from Averitte Express: Introducing Our New Metro Trucks Fleet! At Averitte Express, we’re..."
    },
    {
      image: bo3,
      title: "The New Driver Training Recruitment Program",
      description: "Introducing Averitte Express’s New Driver Training Recruitment Program! At Averitte Express, we’re committed to excellence..."
    }
  ];

  return (
    <SectionWrapper fluid>
      <Container>
        <SectionHeader>
          <CategoryBadge>Insights and Trends</CategoryBadge>
          <SectionTitle>Recent Articles</SectionTitle>
        </SectionHeader>
        
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col xs={12} md={4} key={`insight-article-${index}`}>
              <ArticleCard 
                image={article.image}
                title={article.title}
                description={article.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
}

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const SectionWrapper = styled(Container)`
  padding: 5rem 0;
  background-color: #f8fafc;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const CategoryBadge = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #ef4444;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #1e293b;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.25rem;

  .article-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CardWrapper}:hover & .article-image {
    transform: scale(1.04);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #7f1d1d;
  margin-bottom: 0.75rem;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardLink = styled.a`
  font-size: 0.95rem;
  color: #ef4444;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;
  transition: color 0.2s ease;

  &:hover {
    color: #b91c1c;
    text-decoration: underline;
  }
`;