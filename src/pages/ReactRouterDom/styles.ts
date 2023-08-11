import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.div``

export const CommentBox = styled.div`
  background-color: ${(props) => props.theme["--gray-700"]};
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;