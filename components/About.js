import React from "react";
import Image from "next/image";
import styled from "styled-components";
import profile from "data/profile";
import Profile from "assets/ridho.jpeg";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
  ];

  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading orange">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Ridho and I enjoy learning things on the
              internet starting from learning Networking, Software Development,
              Data Mining, and UI/UX Design. I decided to focus on application
              development because I enjoy creating things that live on the
              internet & a tangible result in the form of applications that can
              be used by the community.
            </p>

            <p>
              And now I have 2 years experience in web development. I’ve had the
              privilege of working at{" "}
              <i>
                <b>Corporation</b>
              </i>
              , a
              <i>
                <b> Start Up</b>
              </i>{" "}
              & Software House as a{" "}
              <i>
                <b>freelace</b>
              </i>
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {profile.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src={Profile}
              width={500}
              height={500}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  p {
    font-size: 16px;
    color: var(--slate);
  }
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--main);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--main);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

export default About;
