import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, MoreStuff, CompaniesIveWorkedWith, AboutMe } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    {/* <AboutMe /> */}
    <Skills />
    <CompaniesIveWorkedWith />
    {/* <Projects /> */}
   {<MoreStuff />}
    {/* <AboutMe /> */}
    <Contact />
  </Layout>
);
