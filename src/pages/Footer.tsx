import React from "react";
import {
  FooterContainer,
  FooterCopyright,
  FooterInfo,
  FooterLinkContainer,
  FooterLinkContent,
  FooterLogo,
  Footers,
  LinkText,
  Text,
  TextLight,
} from "../Styles";
import footerLogo from "../assets/image/Funiro..png";
import { helps, links } from "../common";
import { Subscribe } from "../components";

export const Footer = () => {
  return (
    <Footers>
      <FooterContainer>
        <FooterInfo>
          <FooterLogo src={footerLogo} />
          <Text>
            <TextLight>400 University Drive Suite 200 Coral Gables,</TextLight>
            <TextLight>FL 33134 USA</TextLight>
          </Text>
        </FooterInfo>
        <FooterLinkContainer>
          <FooterLinkContent>
            <TextLight>Links</TextLight>
            {links.map((link, index) => (
              <LinkText to={link.link} key={index}>
                {link.name}
              </LinkText>
            ))}
          </FooterLinkContent>
          <FooterLinkContent>
            <TextLight>Helps</TextLight>
            {helps.map((link, index) => (
              <LinkText to={link.link} key={index}>
                {link.name}
              </LinkText>
            ))}
          </FooterLinkContent>
          <FooterLinkContent>
            <TextLight>Newsletter</TextLight>
            <Subscribe />
          </FooterLinkContent>
        </FooterLinkContainer>
      </FooterContainer>
      <FooterCopyright>
        <p>2023 furniro. All rights reverved</p>
      </FooterCopyright>
    </Footers>
  );
};
