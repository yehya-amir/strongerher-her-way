import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import { LanguageProvider } from "./i18n";
import "./styles.css";

function EnglishSite() {
  return (
    <LanguageProvider lang="en">
      <LandingPage />
    </LanguageProvider>
  );
}

function ArabicSite() {
  return (
    <LanguageProvider lang="ar">
      <LandingPage />
    </LanguageProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnglishSite />} />
        <Route path="/en" element={<EnglishSite />} />
        <Route path="/ar" element={<ArabicSite />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
