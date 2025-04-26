import React from "react";
import { testimonials } from "../API";
import SvgHeading from "../SvgHeading/SvgHeading";
import ClientTestimonialsCard from "./ClientTestimonialsCard";

const ClientTestimonials = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 text-center">
      <SvgHeading heading="What Our Clients Say" />
      <p data-aos="fade-up" className="text-gray-200 max-w-2xl mx-auto my-8">
        Trusted by startups and businesses worldwide — here’s what our clients
        say about working with SuKaj Infotech.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((client, index) => (
          <div key={index}>
            <ClientTestimonialsCard client={client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
