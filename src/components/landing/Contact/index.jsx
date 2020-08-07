import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
// import propic from 'assets/propic.jpeg';
import github from 'assets/github.jpg';
import stackoverflow from './stackoverflow.svg'
import linkedInIcon from './linkedin.jpg';
import githubIcon from './github.svg';


const linkStyle = {
  fontWeight: 'bold',
  color: '#0074d9',
  fontSize: '24pt',
  margin: '0 10px'
}

const blue = {
  color: '#0074d9'
}

const answerLink = 'https://stackoverflow.com/a/32751330/4459026';


export const Contact = () => (
  <Wrapper as={Container} id="contact" style={{alignItems: 'center'}}>
    {/* <Thumbnail style={{display: 'flex', 
                      justifyContent: 'center'
    }}>
    </Thumbnail> */}
    <Details style={{position: 'relative'}}>
    <img src={contact} alt="I've been a full-time coder for over 4 years" 
            style={{
              // transform: 'rotate(5deg)', 
              maxWidth: '400px'
              // borderRadius: '10%'
            }} />
          {/* <h1>Large companies trust my work</h1> */}
          {/* <p>
            I am currently open to <span style={{color: 'rgb(0, 116, 217)'}}>remote only</span> opportunities building with <span style={{color: 'rgb(0, 116, 217)'}}>javascript</span>
          </p>
          <hr></hr> */}
          <p>
            To see my entire work history, check out my 
            <a target="_blank" style={linkStyle} href="https://www.linkedin.com/in/ifullstack/">
              LinkedIn<img src={linkedInIcon} alt='linkedin' style={{width: '28pt'}} />  
            </a>or my 
            <a target="_blank" style={linkStyle} href="https://github.com/tkaycodes">  
               Github<img width="24" src={githubIcon} alt='github' style={{width: '22pt'}} /> 
            </a>
            
          </p>
          
            <p>
            I don't know everything, but I do know how to get answers --
            <a target="_blank" href={answerLink} style={{color: '#707070'}}>
              Heres one of my most popular answers on 
                <span  style={{color: 'rgb(0, 116, 217)', fontSize: '24pt', fontWeight: 'bold', margin: '0 10px'}}>Stackoverflow</span>
                  <img width="24" src={stackoverflow} alt='stackoverflow' /> 
            </a>
          </p>
          {/* <img src={contact} alt="I've been a full-time coder for over 5 years" 
            style={{
              // transform: 'rotate(5deg)', 
              maxWidth: '400px'
              // borderRadius: '10%'
            }} /> */}


          {/* <hr></hr> */}

          {/* <p>
            Weather its updating code bases, or re-designing entire websites or apps -- I have a proven record of getting real results for real businesses.
          </p> */}
          {/* <p> */}
           {/* Feel free to reach out. */}
            {/* <a target="_blank" href={answerLink}> */}
              {/* <span>  */}
                {/* Heres one of my most popular questions on <img width="24" src={stackoverflow} alt={name} />Stackoverflow             */}
              {/* </span> */}
            {/* </a> */}
          {/* </p> */}
          {/* <Button as={AnchorLink} href="#project1"> */}
           {/*  See my work */}
          {/* </Button> */}
        </Details>

    <Details style={{padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px'}}>

    {/* <p>
            I am currently open to <span style={{color: 'rgb(0, 116, 217)'}}>remote only</span> opportunities building with <span style={{color: 'rgb(0, 116, 217)'}}>javascript</span>
          </p> */}
      <ContactForm />
    </Details>
    
  </Wrapper>
  
);
// 