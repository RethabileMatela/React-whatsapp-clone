import React from "react";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        {/* sidebar*/}
        <Sidebar/>
        {/* container with whatsapp logo   */}
      </div>
    </div>
  );
}

export default Home;
