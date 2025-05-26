import React from "react";
import JobApplicationForm from "../JobApplicationForm/JobApplicationForm";
import SvgHeading from "../SvgHeading/SvgHeading";
import { jobListings } from "../API";
import CareerCard from "./CareerCard";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";

const Careers = () => {
  return (
    <>
      {/* Why-Join-Us */}
      <WhyJoinUs />
      <div className="bg-gray-900 py-16 text-center">
        <SvgHeading heading="Careers at SuKaj Infotech" />
        <div className="w-full px-3 py-10">
          <p
            data-aos="fade-up"
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-5"
          >
            Join a passionate team focused on innovation, collaboration, and
            continuous growth. At SuKaj Infotech, we value creative
            problem-solving and the ability to thrive in a fast-paced
            environment. Check out our current job openings and apply today!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {jobListings.map((job, index) => (
              <div key={index} data-aos="fade-up">
                <CareerCard job={job} />
              </div>
            ))}
          </div>
        </div>
        <JobApplicationForm />
      </div>
    </>
  );
};

export default Careers;
