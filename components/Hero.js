import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import profile from "data/profile";

import Logo from "assets/big-logo.svg";
// import { email } from '@config';

const Hero = () => {
  const one = <p className="hello">Hello!</p>;
  const two = <h2 className="big-heading">I&apos;m {profile.name}</h2>;
  const three = <h3 className="big-heading">{profile.role}</h3>;
  const four = (
    <>
      <p>{profile.description}</p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href={`mailto:${profile.email}`}
      target="_blank"
      rel="noreferrer"
    >
      Contact Me
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <>
      <BigLogo>
        <Image src={Logo} alt="image-img" width="1000" height="1000" />
      </BigLogo>
      <StyledHeroSection>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </StyledHeroSection>
    </>
  );
};

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  .big-logo {
    position: absolute;
    right: 0;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--main);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 500;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    font-weight: 500;
    font-size: clamp(30px, 6vw, 60px);
    margin-top: 5px;
    margin-bottom: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    padding: 1.25rem 2rem;
  }

  .hello {
    font-size: 24px;
    font-weight: 500;
    color: #c4c4c4;
  }
`;

const BigLogo = styled.div`
  position: absolute;
  right:  clamp(-250px, -450px, -650px);
  z-index: -1;
  @media (max-width: 999px){
    display:  none;

  }
}
`;
export default Hero;
