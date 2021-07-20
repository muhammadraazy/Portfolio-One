import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
         <LinkList>
              <LinkColumn>
                  <LinkTitle> get in touch </LinkTitle>
                  <LinkItem href="tel:082332945157">082332945157  </LinkItem>
              </LinkColumn>
              <LinkColumn>
                  <LinkTitle> send me an email</LinkTitle>
                  <LinkItem href="mailto:muhammadrazi51@gmail.com"> muhammadrazi51@gmail.com </LinkItem>
              </LinkColumn>
         </LinkList>
         <SocialIconsContainer>
             <CompanyContainer>
                  <Slogan> Building a nice project at a time </Slogan>
             </CompanyContainer>
             <SocialContainer>
                  <SocialIcons>
                        <AiFillGithub />
                  </SocialIcons>
                  <SocialIcons>
                       <AiFillInstagram />
                  </SocialIcons>
                  <SocialIcons>
                      <AiFillLinkedin />
                  </SocialIcons>
             </SocialContainer>
         </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
