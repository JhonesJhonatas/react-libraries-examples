import styled from "styled-components";

export const LinkArea = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const ExampleContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  div {
    width: 20%;
    
    form {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input{
        border: 0;
        border-radius: 6px;
        padding: 0.5rem 1rem;

        color: #000000;
      }

      button{
        border: 0;
        padding: 0.6rem 1rem;
        border-radius: 6px;
        background-color: ${props => props.theme['--indigo-600']};
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover{
          background-color: ${props => props.theme['--indigo-500']};
        }
      }
    }
  }
`;
