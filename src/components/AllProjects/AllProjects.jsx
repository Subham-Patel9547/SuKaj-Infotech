import React from "react";
import { mobileApps, webApps } from "../API";
import AllProjectsCard from "./AllProjectsCard";

const AllProjects = () => {
  return (
    <div>
      {/* Mobile Applications */}
      <div className="mb-16">
        <h3
          data-aos="fade-up"
          className="text-3xl font-semibold text-center regularColor mb-6"
        >
          Mobile Applications
        </h3>
        <div className="flex flex-wrap justify-start items-center gap-10">
          {mobileApps.map((item, index) => (
            <div key={index}>
              <AllProjectsCard index={index} item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Web Applications */}
      <div>
        <h3
          data-aos="fade-up"
          className="text-3xl font-semibold text-center regularColor mb-6"
        >
          Web Applications
        </h3>
        <div className="flex flex-wrap justify-start items-center gap-10">
          {webApps.map((item, index) => (
            <div key={index}>
              <AllProjectsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
