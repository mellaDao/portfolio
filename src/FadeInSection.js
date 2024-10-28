/* 
Following this youtube tutorial: https://www.youtube.com/watch?v=evmu1ABASaU
'The modern way to add animation on scroll with Javascript and CSS'
There is also this resource
https://codesandbox.io/p/sandbox/fade-in-content-with-intersection-observer-gd7z1?file=%2Fsrc%2Findex.js%3A14%2C11-14%2C26
*/
import React, { useState, useEffect, useRef } from "react";

export const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  return (
    <div
      ref={documentRef}
      className={`fade-in-section ${isVisible ? "is-visible" : "not-visible"}`}
    >
      {props.children}
    </div>
  );
};
