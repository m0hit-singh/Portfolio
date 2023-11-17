import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header.component";
import HomeComponent from "./components/home.component";
import "./index.scss";
import AboutComponent from "./components/about.component";
import FooterComponent from "./components/footer.component";
import ContactComponent from "./components/contact.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <HomeComponent />
    <AboutComponent />
    <ContactComponent />
    <FooterComponent />
  </React.StrictMode>
);
