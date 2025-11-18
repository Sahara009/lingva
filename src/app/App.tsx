import { Header } from "../widgets/header/ui/Header";
import { AppRouter } from "./providers/router/AppRouter";
import "./styles/reset.scss";

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
