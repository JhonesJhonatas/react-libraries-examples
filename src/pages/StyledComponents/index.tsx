import { WarningDiamond } from "@phosphor-icons/react";
import { CommentBox, StyledComponentsMain } from "./styles";

export function StyledComponents() {
  return (
    <StyledComponentsMain>
      <h1>Styled Components</h1>
      <CommentBox>
        <WarningDiamond size={30} />
        <span>
          Esta Aplicação inteira foi desenvolvida com styled components, navegue
          pelo código para encontrar diversos casos de uso. 😎
        </span>
      </CommentBox>
      <CommentBox>
        <WarningDiamond size={30} />
        <span>
          Você encontrará a extensão da tipagem, no arquivo src/@types/styled.d.ts. 🤓
        </span>
      </CommentBox>
    </StyledComponentsMain>
  );
}
