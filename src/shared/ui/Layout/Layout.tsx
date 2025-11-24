import { Outlet } from "react-router-dom";
import { Header } from "../../../widgets/header/ui/Header";
import Container from "../Container/Container";
import { Footer } from "../../../widgets/footer/Footer";

export const Layout: React.FC = () => (
  <Container>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Container>
);
