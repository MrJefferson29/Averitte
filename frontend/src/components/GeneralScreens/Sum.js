import React from 'react';
import styled from 'styled-components';

export default function Sum() {
  const summaryData = [
    {
      title: "Efficient Delivery",
      content: "Averitte Express provides enhanced logistics operations for efficient and safe cargo delivery, including specialized pet transport services. Our goal is to take the stress out of freight forwarding for our clients.",
      hasButton: true
    },
    {
      title: "Transparent Pricing",
      content: "With our transparent pricing model, there are no hidden costs, even for specialized pet and cargo delivery services.",
      hasButton: true
    },
    {
      title: "Security for Pets",
      content: "Our facilities and procedures meet the highest standards of security, ensuring that pets are handled with utmost care during transport.",
      hasButton: true
    },
    {
      title: "Warehouse Storage",
      content: "Averitte Express provides safe and specialized storage solutions to ensure the safety and comfort of goods and pets in our care.",
      hasButton: true
    },
    {
      title: "Refund Policy",
      content: "At Averitte Express, customer satisfaction is our top priority. Please note that all refundable bills are cleared upon delivery. Once your package has been delivered and signed for, any eligible refunds will be processed and handed directly to the customer in cash at the time of delivery.",
      hasButton: true
    },
    {
      title: "Our Key Features",
      isList: true,
      features: [
        "Real-Time Tracking",
        "24/7 Support",
        "Easy Payment Methods",
        "Fast & Efficient Delivery"
      ],
      hasButton: false
    },
    {
      title: "About Us",
      content: "Averitte Express is a leading logistics operator, specializing in the safe and efficient delivery of goods. We offer a full range of services in customs clearance and transportation worldwide for both pets and cargo. Our skilled team, supported by advanced tracking and processing software, ensures safe, efficient transport for your needs.",
      hasButton: false
    }
  ];

  return (
    <SummaryContainer>
      <MainHeader>Averitte Express Logistics - Safe & Reliable Delivery Solutions</MainHeader>

      {summaryData.map((item, index) => (
        <CardSection key={`summary-section-${index}`}>
          <SectionTitle>{item.title}</SectionTitle>
          
          {item.isList ? (
            <FeaturesList>
              {item.features.map((feature, idx) => (
                <li key={`feature-item-${idx}`}>{feature}</li>
              ))}
            </FeaturesList>
          ) : (
            <SectionContent>{item.content}</SectionContent>
          )}

          {item.hasButton && <ActionButton href="#learn-more">Learn More</ActionButton>}
        </CardSection>
      ))}
    </SummaryContainer>
  );
}

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const SummaryContainer = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  padding: 3rem 1.5rem;
  max-width: 900px;
  margin: 2rem auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
  border: 1px solid #e2e8f0;
`;

const MainHeader = styled.h1`
  color: #7f1d1d;
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CardSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.75rem;
  background: #ffffff;
  border-left: 4px solid #ef4444;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  border-top: 1px solid #f1f5f9;
  border-right: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateX(4px);
    border-color: #e2e8f0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #7f1d1d;
  margin-bottom: 0.75rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 0;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;

  li {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    position: relative;
    padding-left: 24px;

    &::before {
      content: "✓";
      color: #ef4444;
      position: absolute;
      left: 0;
      font-weight: 900;
    }
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 10px 24px;
  margin-top: 1.25rem;
  background-color: #ef4444;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.1s ease;
  
  &:hover {
    background-color: #dc2626;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;