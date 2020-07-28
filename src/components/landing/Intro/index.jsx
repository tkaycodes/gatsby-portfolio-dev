import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import github from 'assets/github.jpg';
import propic from 'assets/propic.jpeg';



export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hey!</h1>
          <h4>I’m Tabish and I’m a <div style={{color: 'rgb(0, 116, 217)'}}> Frontend Engineer </div> from Vancouver, <div>Canada🇨🇦</div></h4>
          {/* <hr></hr> */}
          <p style={{
            fontSize: '10pt',
            marginTop: '20px',
            maxWidth: '420px',
            borderTop: '1px solid black',
            paddingTop: '20px',
            marginBottom: '40px',
            color: '#707070'}}>
              I like to build things that are scalable, optimized and visually appealing. 
              I am currently open to <span style={{color: 'rgb(0, 116, 217)'}}>remote only </span> 
              opportunities building cool things with <span style={{color: 'rgb(0, 116, 217'}}>Javascript</span>
          </p>
          <Button as={AnchorLink} href="#about">
            Learn More
          </Button>
        </Details>
        <Thumbnail>
          <img src={propic} alt="I’m Tabish and I’m a frontend engineer!" />
          {/* <img src={dev} alt="I’m John and I’m a JAMStack engineer!" /> */}
          {/* <img src={github} alt="I’m Tabish and I’m a Javascript Engineer from Vancouver, Canada.🇨🇦" style={{maxWidth: '350px', borderRadius: '10%'}} /> */}
          {/* <div style={{transform: 'rotate(5deg)', color: '#0074d9', fontSize: '12px',}}>Photo: Company Retreat in Mexico - 2016</div><div style={{fontSize: '12px', color: '#0074d9', transform: 'rotate(5deg)'}}></div> */}
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
