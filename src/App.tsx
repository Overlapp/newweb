import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Policies from "./components/Policies";
import Welcome from "./components/Welcome";
import Vision from "./components/Vision";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Socials from "./components/Socials";

import i18n from "i18next";

import { initReactI18next, useTranslation } from "react-i18next";

import translationEn from "./locales/en/translation";

i18n
  .use(initReactI18next) //passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEn },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

function App() {
  const { t } = useTranslation();

  const YoutubeRedirect = () => {
    window.location.href = "https://www.youtube.com/watch?v=lazl-tsQ9v4";
    return null;
  };

  const Home = () => {
    return <h1></h1>;
  };

  return (
    <div className="App">
      <Socials />
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/video" Component={YoutubeRedirect} />
        </Routes>
      </Router>
      <main>
        <Hero />
        <Welcome />
        <Vision />
        <Features />
        <Policies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
