import { AppRouter } from "./providers/router/AppRouter";
import "./styles/reset.scss";
import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
