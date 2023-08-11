import { Link, WarningDiamond } from "@phosphor-icons/react";
import { CommentBox, Header, Container } from "./styles";

export function ReactRouterDom() {
  return <Container>
    <Header>
      <h1>React Router DOM</h1>
      <div>
        <Link />
        <a href="https://reactrouter.com/en/main" target="_blank">Documentação</a>
      </div>
    </Header>
    <CommentBox>
      <WarningDiamond size={30} />
      <span>
        Esta Aplicação inteira foi desenvolvida com react-router-dom, navegue
        pelo código para encontrar diversos casos de uso. 😎
      </span>
    </CommentBox>

  </Container>
}