import { Link } from "@phosphor-icons/react";
import { ExampleContainer, LinkArea } from "./styled";

export function ReactHookForm() {
  return (
    <main>
      <h1>React-Hook-Form</h1>
      <LinkArea>
        <Link />
        <a href="https://www.react-hook-form.com/">Documentação</a>
      </LinkArea>
      <ExampleContainer>
        <div>
          <h3>Formulário</h3>

          <form>
            <input type="text" placeholder="Primeiro Nome" />
            <input type="text" placeholder="Segundo Nome" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Telefone" />
            <button type="submit" >Submeter</button>
          </form>
        </div>
        <div>
          <h3>Watch</h3>
        </div>
        <div>
          <h3>Errors</h3>
        </div>
        <div>
          <h3>Submit</h3>
        </div>
      </ExampleContainer>
    </main>
  );
}
