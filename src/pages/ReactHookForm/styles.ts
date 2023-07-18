import { styled } from "styled-components";

export const MainContainer = styled.main`
  section {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }
`;

export const ExampleArea = styled.section`
  display: flex;
  margin-top: 2rem;

  div {
    width: 25%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        border: 0;
        padding: 0.5rem;
        border-radius: 6px;
        color: ${(props) => props.theme["--gray-950"]};
      }

      button {
        border: 0;
        outline: 0;
        border-radius: 6px;
        padding: 0.75rem 0;
        background-color: ${(props) => props.theme["--indigo-700"]};
        cursor: pointer;
      }
    }
  }
`;
