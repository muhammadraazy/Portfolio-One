import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
        <SectionDivider />
        <SectionTitle> Technologies </SectionTitle>
        <SectionText> I've worked with a range technologies in the web development. from Front-End to Back-End technologies </SectionText>
        <List>
            <ListItem>
                 <DiReact size="3rem" />
                  <ListContainer>
                      <ListTitle> Front End </ListTitle>
                      <ListParagraph> Experience with React, Nextjs, Styled Components, and Material UI </ListParagraph>
                  </ListContainer>
            </ListItem>
            <ListItem>
                 <DiFirebase size="3rem" />
                  <ListContainer>
                      <ListTitle> Back End </ListTitle>
                      <ListParagraph> Experience with Nodejs and Expressjs </ListParagraph>
                  </ListContainer>
            </ListItem>
            <ListItem>
                 <DiZend size="3rem" />
                  <ListContainer>
                      <ListTitle> Databases</ListTitle>
                      <ListParagraph> Experience with Mongodb </ListParagraph>
                  </ListContainer>
            </ListItem>
            <ListItem>
                 <DiFirebase size="3rem" />
                  <ListContainer>
                      <ListTitle> Design</ListTitle>
                      <ListParagraph> Experience with tools like Adobe Xd </ListParagraph>
                  </ListContainer>
            </ListItem>
        </List>
  </Section>
);

export default Technologies;
