import styled from "styled-components";

export const Div = styled.div`
  background-color: #4791db;
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
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
