import styled from "styled-components";

export const StyledComponentsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CommentBox = styled.div`
  background-color: ${(props) => props.theme["--gray-700"]};
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
