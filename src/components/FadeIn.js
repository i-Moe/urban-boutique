import React, { useEffect, useState, useRef } from "react";

const FadeIn = ({ children, className = "" }) => {
  const [animate, setAnimate] = useState("opacity-0 translate-y-10");
  const ref = useRef(null); // Create a ref for the component

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate("opacity-100 translate-y-0");
        }
      });
    }, observerOptions);

    // Copy ref.current to a variable
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef); // Observe the ref element
    }

    // Cleanup function to unobserve the element
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup
      }
    };
  }, []); // Keep the dependency array empty

  return (
    <div ref={ref} className={`transition-all ease-out duration-700 ${animate} ${className}`}>
      {children}
    </div>
  );
};

export default FadeIn;
