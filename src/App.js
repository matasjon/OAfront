import React from "react";
import ActivitySection from "./components/activitySection/activitySection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import WelcomeSection from "./components/welcomeSection/welcomSection";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ActivitySection />
      <Footer />
    </>
  );
}

export default App;
