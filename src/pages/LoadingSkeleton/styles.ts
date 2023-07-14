import styled, { css } from "styled-components";

interface RepositoryLanguageProps {
  language?: string;
}

export const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto 0;
`;

export const RepositorysArea = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.8rem;
  flex-wrap: wrap;
`;

export const RepositoryBox = styled.div`
  width: 18rem;
  height: 14rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["--gray-800"]};
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: bold;
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;
  }
`;

export const RepositoryLanguageColor = styled.div<RepositoryLanguageProps>`
  ${(props) =>
    props.language === "TypeScript"
      ? css`
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #0284c7;
        `
      : null}
`;
