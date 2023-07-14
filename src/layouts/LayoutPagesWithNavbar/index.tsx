import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { Container } from "./styles";

export function LayoutPagesWithNavbar() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
