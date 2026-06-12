import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ma1 from "../../Assets/ma1.jpg";
import ma2 from "../../Assets/ma2.jpg";
import ma3 from "../../Assets/ma3.jpg";
import ma4 from "../../Assets/ma4.jpg";
import moo from "../../Assets/moo.jpg";

const teamMembers = [
  {
    name: "Michael Daniel",
    title: "Chief Marketing Officer",
    image: ma1
  },
  {
    name: "Mark Jane",
    title: "Analytics & Insights",
    image: moo
  },
  {
    name: "Abraham Coleman",
    title: "Founder / COO",
    image: ma2
  },
  {
    name: "Jeff Hardy",
    title: "VP Sales and Marketing",
    image: ma3
  },
  {
    name: "Clark Roberts",
    title: "Chief Finance Officer",
    image: ma4
  }
];

function Team() {
  return (
    <TeamSectionWrapper>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={`management-member-${index}`}>
            <ImageWrapper>
              <img src={member.image} alt={member.name} className="team-image" />
            </ImageWrapper>
            <MemberName>{member.name}</MemberName>
            <MemberTitle>{member.title}</MemberTitle>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamSectionWrapper>
  );
}

export default Team;

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const TeamSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  justify-items: center;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

const TeamCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 280px;
  text-align: center;
  border: 1px solid #f1f5f9;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(185, 28, 28, 0.08);
  }
`;

const ImageWrapper = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.25rem;
  border: 3px solid #fef2f2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: border-color 0.25s ease;

  ${TeamCard}:hover & {
    border-color: #fee2e2;
  }

  .team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.35rem;
  letter-spacing: -0.3px;
`;

const MemberTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ef4444;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;