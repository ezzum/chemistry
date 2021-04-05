import { FooterStyled, GitHubIcon, GitHubLink, Info } from "./footer-styled";

function Footer() {
  return (
    <FooterStyled>
      <GitHubLink href="https://github.com/ezzum" target="_blank">
        <Info>powered by ezzum</Info>
        <GitHubIcon />
      </GitHubLink>
    </FooterStyled>
  );
}

export default Footer;
