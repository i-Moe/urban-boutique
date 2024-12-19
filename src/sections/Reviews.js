import React, { useEffect } from "react";
import FadeIn from "../components/FadeIn";

const Reviews = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script tag when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reviews" className="py-40 mt-[-150px] z-[-250]  relative">
      <div className="container-max-w-5xl">
        <div
          className="elfsight-app-a39fd654-7e86-4693-b919-2d59295bd1ef"
          data-elfsight-app-lazy
          style={{ width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
