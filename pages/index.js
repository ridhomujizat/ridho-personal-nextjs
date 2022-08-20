import Head from "next/head";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Social from "components/Social";
import Email from "components/Email";
import Footer from "components/Footer";
import Hero from "components/Hero";
import About from "components/About";
import Job from "components/Job";
import MainProject from "components/MainProject";
import Contact from "components/Contact";
// import Project from "components/Project";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  return (
    <div id="root">
      <Head>
        <title>Ridho | Software Engineer</title>
        <meta name="description" content="personal web ridho" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <StyledContent>
        <Navbar />
        <Social />
        <Email />

        
        <div id="content">
          <StyledMainContainer className="fillHeight">
            <Hero />
            <About />
            <Job />
            <MainProject />
            <Contact />
            {/* <Project /> */}
          </StyledMainContainer>
          <Footer />
        </div>


      </StyledContent>
    </div>
  );
}
