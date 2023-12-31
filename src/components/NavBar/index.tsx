import { NavLink } from "react-router-dom";
import { NavContainer } from "./styles";
import { ArrowBendDownRight, Atom } from "@phosphor-icons/react";

export function NavBar() {
  return (
    <NavContainer>
      <div>
        <NavLink to={"/"}>
          <Atom size={50} />
          <span>React-Libraries-Examples</span>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/styled-components"}>
          <ArrowBendDownRight />
          <span>Styled-Components</span>
        </NavLink>
        <NavLink to={"/react-router-dom"}>
          <ArrowBendDownRight />
          <span>React Router DOM</span>
        </NavLink>
        <NavLink to={"/react-hook-form"}>
          <ArrowBendDownRight />
          <span>React Hook Form</span>
        </NavLink>
        <NavLink to={"/loading-skeleton"}>
          <ArrowBendDownRight />
          <span>Loading Skeleton</span>
        </NavLink>
      </div>
    </NavContainer>
  );
}
