import React, { useState } from "react";
import SvgHeading from "../SvgHeading/SvgHeading";

const positions = [
  "Frontend Developer (ReactJS)",
  "Backend Developer (Node.js)",
  "Mobile App Developer (React Native)",
  "UI/UX Designer",
  "Full Stack Developer",
];

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    console.log("Submitted Application:", formData);
    alert("Application submitted successfully!");
    // Optionally send to backend
  };

  return (
    <div className="bg-gray-950 py-10 px-3 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl shadow-md max-w-xl w-full">
        <SvgHeading heading="Job Application Form" />
        <form
          data-aos="fade-up"
          onSubmit={handleSubmit}
          className="space-y-4 mt-8 text-left"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-900 text-white text-base focus:outline-none appearance-none max-h-56 overflow-y-auto"
          >
            <option value="" className="text-gray-300 bg-gray-900">
              Apply For
            </option>
            {positions.map((pos, index) => (
              <option key={index} value={pos}>
                {pos}
              </option>
            ))}
          </select>

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Why are you a good fit?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
