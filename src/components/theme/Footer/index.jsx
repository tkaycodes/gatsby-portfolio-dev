import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Tabish Khan</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
          ❤️
          </span>{' '}
          in{' '}
          <a href="https://github.com/tkaycodes/" rel="noopener noreferrer" target="_blank">
           Vancouver, Canada
          </a>
        </span>
      </Details>
      <Links>
      {
      social.map(({ id, name, link, icon }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
          <img width={name == 'LinkedIn' ? "34" : "24"} src={icon} alt={name} />
        </a>))
      }
      </Links>
    </Flex>
  </Wrapper>
);
