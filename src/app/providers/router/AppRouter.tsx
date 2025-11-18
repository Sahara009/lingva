import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../../../pages/home/ui/HomePage";
import { Layout } from "../../../shared/ui/Layout/Layout";
import NotFoundPage from "../../../widgets/notFound/ui/NotFoundPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
