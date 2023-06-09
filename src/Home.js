import React from "react";
import HomeCard from "./components/home-card";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <div className="update-container update bgdark text-white">
      <h1>Team Hub</h1>

      <div>
        <HomeCard title="Updates" />
        <HomeCard title="Team Events" />
        <HomeCard title="Health" />
      </div>
    </div>
  );
};

export default Home;
