import styled from "styled-components";

import logo from "../assets/logo-icon-primary.png";

export const InDivStyled = styled.div`
  width: 100px;
  height: 120px;
`;

export const Img = styled.div`
  width: 100%;
  height: 80%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Info = styled.p`
  text-align: center;
`;
