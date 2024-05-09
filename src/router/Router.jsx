import { Navigate, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import PageNotFound from "../pages/404";
import { getProfile } from "../services/user";
import { ColorRing } from "react-loader-spinner";


function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  if (isLoading)
    return (
      <ColorRing wrapperClass="loader"
        colors={["#03AED2", "#CAF4FF", "#C40C0C", "#FC4100", "#803D3B"]}
      />
    );
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
