import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import companies from 'assets/companies.png';
import companiesLong from 'assets/companies-black-long.png';
import companiesBlack from 'assets/companies-black.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import stackoverflow from './stackoverflow.svg'

export const CompaniesIveWorkedWith = () => {
  const { theme } = useContext(ThemeContext);
  const questionLink = 'https://stackoverflow.com/questions/28996773/error-delete-on-table-violates-foreign-key-constraint-key-id-is-still-referenc';
  const answerLink = 'https://stackoverflow.com/a/32751330/4459026';


  return (
    <Wrapper id="experience" theme={theme}>
    {/* <div   style={{boxShadow: 'rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px'}}> */}
      <SkillsWrapper as={Container}>

        <Thumbnail>
        {/* <p>
            <div>I don't know everything, </div> <div>But I know how to get answers -  </div>
            <a target="_blank" href={answerLink}>
              <span> Heres one of my most popular answers on <div><img width="24" src={stackoverflow} alt={name} />Stackoverflow    </div>
              </span>
            </a>
          </p> */}
          <img src={companies} alt="Companies that Ive produced results for" style={{
            marginBottom: '-20px',
            boxShadow: 'rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px',
            background: 'white'
           }}/>
          {/* <div style={{
            fontSize: '10px',
            textAlign: 'center',
            maxWidth: '300px',
            margin: 'auto',
            color: '#707070',
            lineHeight: '1.5'
          }}>Ive produced work for big names. (website re-designs, plugins, carousels, models, sliders, dropdown menus, chat bots etc)</div> */}
        </Thumbnail>
        <Details theme={theme}>
          <h1>Proven Track Record</h1>
          <p>
           Ive produced work for many high-traffic clients (250k+ monthly visitors) that gets used by lots of people. This has allowed me to solve a wide range of problems for different use-cases and business models.
          </p>
          <p>

          <p style={{fontSize: '14pt', borderTop: '1px solid', paddingTop: '20px'}}>
            I don't know everything, but I do know how to get answers --
            <a target="_blank" href={answerLink} style={{color: 'rgb(0, 116, 217)', marginLeft: '5px'}}>
               Heres one of my most popular answers on 
                <span  style={{color: 'rgb(0, 116, 217)', fontSize: '14pt', fontWeight: 'bold', margin: '0 10px'}}>Stackoverflow</span>
                  <img width="18" src={stackoverflow} alt='stackoverflow' /> 
            </a>
          </p>

          {/* <div>I don't know everything, </div> <div>But I know how to get answers -  </div>
            <a target="_blank" href={answerLink}>
              <span> Heres one of my most popular answers on <div><img width="24" src={stackoverflow} alt={name} />Stackoverflow    </div>
              </span>
            </a> */}
            
          </p>
          {/* <p>
            Weather its updating code bases, or re-designing entire websites or apps -- I have a proven record of getting real results for real businesses.
          </p> */}

          <Button as={AnchorLink} href="#project1">
           See latest projects
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
