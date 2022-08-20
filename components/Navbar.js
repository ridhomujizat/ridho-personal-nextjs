import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { useScrollDirection } from "hooks";
import { navLinks } from "data/config";

import Menu from "./Menu";

import logo from "assets/logo.svg";

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--nav);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === "up" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--nav);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${(props) =>
      props.scrollDirection === "down" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-sans);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--main);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--main-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:hover {
          color: var(--lightest-slate) !important;
          font-weight: 700;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

export default function Navbar() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection("down");

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logo = (
    <div className="logo" tabIndex="-1">
      <Link href="/" aria-label="home">
        <Image src={logo} width="70px" height="70px" alt="drdev" />
      </Link>
    </div>
  );

  const ResumeLink = (
    <a
      className="resume-button"
      href="https://drive.google.com/file/d/1WMLhjQFKWurI0GYZq78wDsQPICaz8uDl/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {Logo}

        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </StyledLinks>
        <Menu />
      </StyledNav>
    </StyledHeader>
  );
}
