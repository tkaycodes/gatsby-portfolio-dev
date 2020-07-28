import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Links } from './styles';
import desktopPics from 'assets/desktoppics.png';
import desktopTablet from 'assets/desktoptablet.png';
import tech from './tech.json';


export const MoreStuff = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="project1">
      <SkillsWrapper as={Container}>
      <Thumbnail>
          <img src={desktopTablet} style={{maxWidth: '550px'}} alt="I’m Tabish and I’m a frontend engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1 style={{marginBottom: '10px'}}>Latest Project (Desktop / Tablet)</h1>
          <span>Corresponding Desktop SPA</span>
          <hr></hr>
          <Links style={{marginTop: '30px'}}>
              {tech.map(({ id, name, link, icon }) => (
                <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                  <img width="24" src={icon} alt={name} /> 
                </a>
              ))}
            </Links>
              <ul style={{
                  marginBottom: '2.5rem',
                  fontSize: '12pt',
                  fontWeight: 'normal',
                  lineHeight: '1.3',
                  color: '#707070'
                }}
              >
                <li>Single Page Application (SPA) built using Vue JS for reactive data binding, performant interface</li>
                <li>Server-Side Rendered (SSR) using NuxtJS (improved SEO, client-side routing)</li>
                <li>Traffic: 300k Monthly Visitors</li>
                <li>Fully Responsive, pixel perfect HTML/CSS, Tailwind CSS</li>
                <li>Integrates with mobile app (see above project), GTM (Analytics), Trustpilot (Reviews) </li>
              </ul>
            <Button>
            <a style={{color: 'white'}}target="blank" href="https://www.springfinancial.ca/">See Live Project</a>
            </Button>
          </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
