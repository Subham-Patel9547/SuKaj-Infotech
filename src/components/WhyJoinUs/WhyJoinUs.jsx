import React from "react";
import { perks } from "../API";
import WhyJoinUsCard from "./WhyJoinUsCard";
export default function WhyJoinUs() {
  return (
    <section className="py-12 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Why Join <span className="text-primary">SuKaj?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <WhyJoinUsCard key={index} perk={perk} />
          ))}
        </div>
      </div>
    </section>
  );
}
