import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Links, PhoneOutline, PhoneImage } from './styles';
import desktopPics from 'assets/desktoppics.png';
import desktopTablet from 'assets/desktoptablet.png';
import tech from './tech.json';
import videoScreenRec from 'assets/screenshot.gif';


import phoneOutline from 'assets/phone-outline.png';


export const MoreStuff = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="project1" theme={theme}>
      <SkillsWrapper as={Container}>
      <Thumbnail style={{position: 'relative'}}>
          <img src={desktopTablet} style={{display: 'inline-block'}} alt="I’m Tabish and I’m a frontend engineer!" />
          <PhoneOutline style={{backgroundImage: `url(${phoneOutline})`}}>
            <PhoneImage style={{backgroundImage: `url(${videoScreenRec})`}}></PhoneImage>
          </PhoneOutline>
        </Thumbnail>
        <Details theme={theme}>
          <h1 style={{marginBottom: '10px'}}>Latest Project</h1>
          <span>Produced for client in the Financial/Auto Loans Industry</span>
          <Links style={{marginTop: '20px'}} theme={theme}>
              {tech.map(({ id, name, link, icon }) => (
                <a 
                  href={link}
                  target="blank"
                  className={`techlink  ${name.toLowerCase()}`}
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px', 
                    padding: '10px', 
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    marginRight: '10px'
                  }}>
                    <img 
                      width={name === 'Nuxt' ? "20": "18"} 
                      src={icon} 
                      alt={name}/>  
                    {name}
                </a>
              ))}
            </Links>
            <hr style={{ background: theme === 'dark' && 'white'  }}></hr>
              <ul style={{
                  marginBottom: '2.5rem',
                  fontSize: '10pt',
                  fontWeight: 'normal',
                  lineHeight: '1.3',
                  color: '#707070'
                }}
              >
                <li>Built using Vue JS for reactive data binding, performant interface</li>
                <li>SPA and PWA deployed separately but integrated seamlessly</li>
                <li>SPA: Server-Side Rendered (SSR) using NuxtJS (improved SEO, client-side routing)</li>
                <li>PWA: Data capture with smooth animations, transitions, custom validations etc </li>
                <li>PWA: State Management using Vuex </li>
                <li>Traffic: 300k Monthly Visitors</li>
                <li>Fully Responsive, pixel perfect HTML/CSS, Tailwind CSS</li>
                <li>Integrates with backend API, GTM (Analytics), Trustpilot (Reviews) </li>
              </ul>
            <Button style={{display: 'inline-block', margin: '10px'}}>
              <a style={{color: 'white'}}target="blank" href="https://www.springfinancial.ca/">See Live Project (SPA)</a>
            </Button>
            <Button style={{display: 'inline-block', margin: '10px'}}>
              <a style={{color: 'white'}}target="blank" href="https://www.springfinancial.ca/apply/auto-loans?SID2=auto-loans">See Live Project (PWA)</a>
            </Button>
          </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
