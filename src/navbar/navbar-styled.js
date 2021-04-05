import styled from "styled-components";

import logo from "../assets/logo-icon-white.png";

export const Div = styled.div`
  background-color: #4791db;
  width: 100%;
  height: 6%;
  max-height: 50px;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0 2rem;
  height: 100%;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: #fff;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background-color: #1976d2;
  }

  &.active {
    background-color: #115293;
  }
`;

export const Logo = styled.div`
  width: 60px;
  height: 90%;
  background-image: url(${logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
