import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import woods from 'assets/background.jpg';
import desktopPics from 'assets/desktoppics.png';
import propic from 'assets/propic.jpeg';
import github from 'assets/github.jpg';
import ubc from 'assets/ubc.png';

export const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Thumbnail>
          <img className="ubc-logo" src={ubc} style={{background: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23a0ac92' fill-opacity='0.32' fill-rule='evenodd'/%3E%3C/svg%3E")`}}alt="I’m Tabish and I’m a Backend & Devops engineer!" />
        </Thumbnail>
      <Details theme={theme}>
          {/* <h1>ABOUT ME</h1> */}
          <p>
            I completed my undergrad from the University of British Columbia <div>(<span style={{fontWeight: 'bold'}}>BSc.</span> - <span style={{color: "rgb(0, 116, 217)"}}> Computer Science,</span> Biology)</div>
          </p>
          <p>
            I am currently available for <span style={{color: 'rgb(0, 116, 217)'}}>remote work</span> opportunities (contacts or fulltime) building something exciting - working with modern<span style={{color: "rgb(0, 116, 217)"}}> javascript </span> (React, Vue, GraphQL, NodeJS etc)
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
