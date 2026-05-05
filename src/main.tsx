import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Header />
    <main>
        <Hero />
      </main>
    <Footer />
  </React.StrictMode>
);
