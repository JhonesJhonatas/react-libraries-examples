import styled from "styled-components";

export const NavContainer = styled.nav`
  margin: 0 auto 0;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["--gray-800"]};
  height: fit-content;
  
  align-items: center;
  justify-content: space-between;

  div:first-child {

    background-color: ${props => props.theme['--gray-700']};
    border-radius: 6px;
    padding: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      cursor: pointer;
      font-weight: bold;
    }
  }

  div:last-child {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: none;
      display: flex;
      gap: 0.5rem;

      &.active{
        font-weight: bold;
        color: ${props => props.theme['--indigo-950']};
      }
    }
  }
`;
