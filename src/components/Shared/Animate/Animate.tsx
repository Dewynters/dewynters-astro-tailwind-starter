import React, { useEffect, useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function Animate({ children, type }) {
  const target = useRef();
  const tl = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: target.current,
            start: "top 75%",
          },
        })
        .to(".fade-up", {
          opacity: 1,
          duration: 2,
          y: 0,
        });
    }, target);
  }, []);
  return (
    <section ref={target}>
      <div
        className={clsx({
          "fade-up": type === "fade-up",
          "fade-down": type === "fade-down",
        })}
      >
        {children}
      </div>
    </section>
  );
}
