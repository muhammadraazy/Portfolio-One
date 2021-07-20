import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
         <LeftSection>
              <SectionTitle main center >
                 Welcome to<br />
                 my personal portfolio
              </SectionTitle>
              <SectionText>
                   Hi there my name is Mohammed Raazy, 
                   my purpose in web development is to be a better and good developer, i'd like to spread a good vibe through the web technologies to the world and another developers out there
              </SectionText>
              <Button onClick={() => window.location.href = "/about" } > More About Me </Button>
         </LeftSection>
    </Section>
  </>
);

export default Hero;