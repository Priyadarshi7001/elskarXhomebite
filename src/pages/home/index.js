import React from "react";
import Sidebar from "../../components/sidebar";
import Main from "../../components/main";

const Home = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-start items-start">
        <div className="lg:w-2/12 w-full sidebar-holder">
          <Sidebar />
        </div>
        <div className="lg:w-9/12 w-full main-holder">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
