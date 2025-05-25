"use client";

import { useState } from "react";

export default function Accordeon() {
  const [accordeonOpen, setAccordeonOpen] = useState(false);

  return (
    <div>
      <p className="font-light mb-6">
        <span>
          Picture this: an application that doesn&apos;t just tell you the
          weather, but also helps you plan your activities around it. Imagine
          knowing exactly the perfect day to plan that hike, or when to avoid
          the outdoor concert due to an unexpected shower. That&apos;s exactly
          what the Dept Weather Planner offers you.
        </span>

        <span
          className={
            accordeonOpen
              ? "max-h-none block mt-6 overflow-clip transition-all duration-500 opacity-100"
              : "max-h-0 block overflow-clip transition-all opacity-0 duration-500"
          }
        >
          Built with cutting-edge technologies, our weather planner brings you
          accurate, real-time weather data with a slick and user-friendly
          interface. But it&apos;s not just a weather app; it&apos;s an
          intuitive daily planner that syncs with the weather. With a range of
          activities to choose from, it suggests the best options based on
          current and forecasted weather conditions.
        </span>
      </p>

      <button
        className="border-b border-solid border-white font-light w-max cursor-pointer hover:text-black-200 transition-colors active:duration-100 focus-visible:text-black-200"
        onClick={() => setAccordeonOpen(!accordeonOpen)}
      >
        {accordeonOpen ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
