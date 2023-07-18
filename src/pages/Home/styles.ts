import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a{
    margin-top: 1rem;
    width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    svg{
      background-color: ${props => props.theme['--indigo-600']};
      height: 2rem;
      width: 2rem;
      padding: 0.2rem;
      border-radius: 6px 0 0 6px;
    }

    span{
      background-color: ${props => props.theme['--gray-700']};
      padding: 0.35rem 0.75rem;
      border-radius: 0 6px 6px 0;
    }
  }
`;
