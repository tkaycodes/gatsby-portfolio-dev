import styled from 'styled-components';
// import detailsIllustration from 'assets/illustrations/details.svg';

import woods from 'assets/background.jpg';
// style={{backgroundImage: `url(${woods})`}}

export const Wrapper = styled.div`
  background-image: url(${woods});
  background-size: auto;
  background-position: left top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    background-position: 25% 8%;
  }
`;

// export const Wrapper = styled.div`
//   background-image: url(${detailsIllustration});
//   background-size: contain;
//   background-position: left top;
//   background-repeat: no-repeat;
// `;

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
  
  .highLightText {
    color: rgb(108 175 233);
    @media (max-width: 960px) {
      color: white;
    }
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
    @media (max-width: 960px) {
      color: white;
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};
    @media (max-width: 960px) {
      color: white;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
