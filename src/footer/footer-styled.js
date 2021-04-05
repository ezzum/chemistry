import styled from "styled-components";

import gitHubIcon from "../assets/github.png";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 6%;
  max-height: 40px;
  min-height: 30px;
  background-color: #4791db;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const GitHubLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  &:hover {
    mix-blend-mode: soft-light;
  }
`;

export const Info = styled.p`
  color: #fff;
  margin: 0 0.5rem 0 1rem;
`;

export const GitHubIcon = styled.div`
  width: 30px;
  height: 80%;
  margin: 0 1rem 0 0.5rem;
  background-image: url(${gitHubIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
