import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import teamplayer from 'assets/teamplayer.png';
import curvedArrow from 'assets/curvedarrow.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import github from 'assets/github.jpg';
import ubc from 'assets/ubc.png';
import ubcWhite from 'assets/ubc-white.png';


export const Skills = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <Wrapper id="about" style={{
      marginTop: '-200px',
      boxShadow: '0 8px 8px 0px rgba(0,0,0,0.3)'
    }}>
      <SkillsWrapper as={Container}>
      <Thumbnail style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
          {/* remote work image */}
          <img src={github} alt="I’m Tabish and I’m a Javascript Engineer from Vancouver, Canada.🇨🇦" style={{maxWidth: '350px', borderRadius: '50%'}} />
        
        </Thumbnail>
      <Details theme={theme}>
          <h1>Ive been <span className="highLightText">coding</span> with North American (Canada, USA) teams  <span className="highLightText">full-time</span> for over <span className="highLightText">4 years</span></h1>
          <p style={{color: 'white', borderBottom: '1px solid white', paddingBottom: '15px'}}>
            <span className="highLightText">Frontend:</span> Javascript (React, Redux, Vue, Vuex, SPA, PWA, MVVM, jQuery, AJAX), Webpack, HTML, CSS, SASS
          </p>
          <div style={{
            fontSize: '14pt', 
            marginBottom: '2.5rem', 
            fontWeight: 'normal',
            lineHeight: '1.3', 
            color: 'white'
          }}>
            <span className="highLightText">Full Stack:</span> Ruby (Sinatra and Rails), NodeJS (Express), PHP (Laravel), Python, TDD, MVC, mongoDB, Firebase, postgreSQL, mySQL, AWS, CI/CD, Heroku, GIT, System Design, UI/UX, AdobeXD, Photoshop
          </div>
          <div style={{
            fontSize: '14pt', 
            marginBottom: '2.5rem', 
            fontWeight: 'normal',
            lineHeight: '1.3', 
            color: 'white'
          }}>
          </div>
          <div style={{
            fontSize: '14pt', 
            marginBottom: '2.5rem', 
            fontWeight: 'normal',
            lineHeight: '1.3', 
            color: '#707070',
            paddingTop: '20px',
          }}>
            {/* BSc. Computer Science, Biology - 2014 */}
            <a href="https://twitter.com/UBC?s=20" target="_blank">
              <img className="ubc-logo" src={ubcWhite} style={{maxWidth: '310px', padding: '20px 0', marginBottom: '0'}}alt="I’m Tabish and I’m a frontend engineer" />
              {/* <img className="ubc-logo" src={ubc} style={{maxWidth: '310px', padding: '20px 0', marginBottom: '0', background: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23a0ac92' fill-opacity='0.32' fill-rule='evenodd'/%3E%3C/svg%3E")`}}alt="I’m Tabish and I’m a frontend engineer" /> */}
            </a>
            <div style={{
              fontSize: '10px',
              color: 'white'
            }}><a href="https://twitter.com/UBC?s=20" target="_blank" style={{color: 'white'}}>BSc. Computer Science, Biology - 2014 </a></div>
            {/* <a href="https://stackoverflow.com/questions/28996773/error-delete-on-table-violates-foreign-key-constraint-key-id-is-still-referenc"> Heres one of my most popular questions on Stackoverflow </a> */}
            {/* <div style={{color: '#0074d9'}}>Web Design: UI/UX, AdobeXD, Photoshop, Balsamiq, Moqups (Prototyping)</div> */}
          </div>
          <Button as={AnchorLink} href="#experience">
            See my Experience
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
