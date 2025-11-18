import { Outlet } from "react-router-dom";
import { Header } from "../../../widgets/header/ui/Header";
import Container from "../Container/Container";

export const Layout: React.FC = () => (
  <Container>
    <Header />
    <main>
      <Outlet />
    </main>
  </Container>
);
