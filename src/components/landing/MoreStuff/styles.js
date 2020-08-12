import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-image: ${({ theme }) => (theme === 'dark' && 'none')};
  }
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    margin-left: -100px;
  }

  @media (max-width: 960px) {
    max-width: 350px;
  }

`;


export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }

  .vuex {
    img {
      vertical-align: bottom;
    }
  }

  .techlink {
    color: ${({ theme }) => (theme === 'dark' && 'white')};
    background: ${({ theme }) => (theme === 'dark' && '#181717')};
    border: ${({ theme }) => (theme === 'dark' && '1px solid white')};

  }
  
`;

export const PhoneOutline = styled.div`
  position: absolute; 
  display: inline-block;
  background-size: 230px;
  height: 410px;
  width: 210px;
  right: 0%;
  top: 20%;
  

  @media (max-width: 1280px) {
    right: 0;
    top: 40%;
  }


  @media (max-width: 960px) {
    top: -30%;
  }
`;

export const PhoneImage = styled.div`
  background-size: 175px;
  height: 370px;
  background-repeat: no-repeat;
  background-position: 25px 40px;
  @media (max-width: 960px) {
    
  }
`