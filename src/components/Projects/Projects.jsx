import React from "react";
import SvgHeading from "../SvgHeading/SvgHeading";
import AllProjects from "../AllProjects/AllProjects";
import ClientSays from "../ClientSays/ClientSays";

const Projects = () => {
  return (
    <div className="px-6 py-12 bg-gray-900 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <SvgHeading heading="Projects" />
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <AllProjects />
        </div>
      </div>
      <div className="my-7">
        <ClientSays />
      </div>
    </div>
  );
};

export default Projects;
