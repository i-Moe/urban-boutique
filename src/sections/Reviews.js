import React, { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const reviewsRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true); // Set state when the script is loaded
    document.body.appendChild(script);

    // Cleanup function to remove the script tag when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && reviewsRef.current) {
      // Dynamically load the Elfsight widget when it enters the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add the Elfsight widget content only when it's in the viewport
              const widgetDiv = document.createElement("div");
              widgetDiv.className = "elfsight-app-a39fd654-7e86-4693-b919-2d59295bd1ef";
              widgetDiv.setAttribute("data-elfsight-app-lazy", "true");
              widgetDiv.style.width = "100%";
              widgetDiv.style.height = "100%";
              reviewsRef.current.appendChild(widgetDiv);
            }
          });
        },
        { threshold: 0.1 } // Trigger the load when 10% of the widget is visible
      );

      observer.observe(reviewsRef.current);

      // Cleanup observer when component is unmounted
      return () => observer.disconnect();
    }
  }, [scriptLoaded]);

  return (
    <section id="reviews" className="py-40 mt-[-150px] z-[-250] relative">
      <div className="container-max-w-5xl">
        <div
          ref={reviewsRef}
          className="elfsight-app-container"
          style={{ width: "100%", height: "100%" }}
          allowFullScreen
        ></div>
      </div>
    </section>
  );
};

export default Reviews;



// import React, { useEffect } from "react";

// const Reviews = () => {
//   useEffect(() => {
//     // Dynamically load the Elfsight script
//     const script = document.createElement("script");
//     script.src = "https://static.elfsight.com/platform/platform.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup function to remove the script tag when the component is unmounted
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <section id="reviews" className="py-40 mt-[-150px] z-[-250]  relative">
//       <div className="container-max-w-5xl">
//         <div
//           className="elfsight-app-a39fd654-7e86-4693-b919-2d59295bd1ef"
//           data-elfsight-app-lazy
//           style={{ width: "100%", height: "100%" }}
//           allowFullScreen
//           loading="lazy"
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
