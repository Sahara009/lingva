import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../pages/home/ui/HomePage";
import { Layout } from "../../../shared/ui/Layout/Layout";
import NotFoundPage from "../../../widgets/notFound/ui/NotFoundPage";
import { CertificationPage } from "../../../pages/certification/ui/CertificationPage";
import { Intership } from "../../../pages/intership/ui/Intership";
import { CoursesPage } from "../../../pages/courses/ui/CoursesPage";
import { CatalogPage } from "../../../pages/catalog/ui/CatalogPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/intership" element={<Intership />} />
        <Route path="/certification" element={<CertificationPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
