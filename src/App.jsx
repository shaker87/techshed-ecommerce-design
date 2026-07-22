import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { setTheme, toggleTheme } from "./store/actions/themeActions";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    dispatch(setTheme(localStorage.getItem("theme") || "light"));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              theme={theme}
              toggleTheme={() => dispatch(toggleTheme())}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="customer" element={<CustomerDashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
