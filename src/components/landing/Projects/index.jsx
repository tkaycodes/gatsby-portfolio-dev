import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import videoScreenRec from 'assets/screenshot.gif';

import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, Button } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import dev from 'assets/illustrations/skills.svg';
import phoneOutline from 'assets/phone-outline.png';
import tech from './tech.json';


import { Wrapper, Grid, Item, Content, Stats, SkillsWrapper, Thumbnail, Details, Links, PhoneImage} from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper as={Container} id="projects">
      {/* <h1>Latest Front end Project</h1> */}
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1 style={{marginBottom: '10px'}}>Latest Project (Mobile)</h1>
          <span>Client: Financial Institution</span>
          <hr></hr>
          <Links>
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
              <li>Progressive Web App (PWA) built using Vue JS for reactive data binding, lightweight, performant interface</li>
              <li>Data-capture Form App with smooth animations, effects, transitions, custom validations, progress bar</li>
              <li>Integrates with corresponding web app (see project below), GTM (Analytics), API for secure data submission</li>
              <li>Traffic: 300k Monthly Visitors</li>
              <li><a target="_blank" href="https://vuex.vuejs.org/">Vuex</a> used for App Global State Management (similar to <a target="_blank" href="https://redux.js.org/">Redux</a>)</li>
            </ul>
            {/* https://www.springfinancial.ca/apply/auto-loans */}
          {/* <Button as={AnchorLink} href="#contact">
            Go to Live Deployed PWA 
          </Button> */}
          <Button>
          <a style={{color: 'white'}}target="blank" href="https://www.springfinancial.ca/apply/auto-loans?SID2=auto-loans">View Live Project </a>
          </Button>
        </Details>
        <Thumbnail>
          <PhoneImage style={{backgroundImage: `url(${phoneOutline})`}}>
            <img style={{
                maxWidth: '225px', 
                position: 'absolute', 
                top: '70px', 
                left: '43px'
              }}
              src={videoScreenRec} />
          </PhoneImage>
        </Thumbnail>
      </SkillsWrapper>
    </Wrapper>
  );
};
