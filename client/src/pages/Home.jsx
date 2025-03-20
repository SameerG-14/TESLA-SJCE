import React from "react";
import ElectroSection from "../components/ElectroSection";
import TeamSection from "../components/TeamsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="w-full h-screen overflow-y-auto snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="w-full h-screen snap-start">
        <ElectroSection />
      </div>

      <div className="w-full h-screen snap-start">
        <TeamSection />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
