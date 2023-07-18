import { GithubLogo } from "@phosphor-icons/react";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Olá 👋,</h1>
        <h3>Este projeto é um acervo de implementações de bibliotecas.</h3>
        <a href="https://github.com/JhonesJhonatas/react-libraries-examples" target="_blank">
          <GithubLogo />
          <span>Repósitório no GitHub</span>
        </a>
      </div>

      <p>
        Geralmente, quando tenho que testar o uso de alguma biblioteca,
        implemento aqui primeiro para entender como funciona e os casos de uso,
        isso me ajuda a implementar da melhor forma no projeto final, e ainda
        fica como exemplo, caso eu precise relembrar alguma deleas, espero que
        ele seja útil para você também! 😉
      </p>
    </HomeContainer>
  );
}
