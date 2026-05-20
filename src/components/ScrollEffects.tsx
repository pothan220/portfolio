"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => revealObserver.observe(element));

    const bars = document.querySelectorAll<HTMLElement>(".skill-bar-fill");
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.width = `${target.dataset.width || 0}%`;
          barObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach((bar) => barObserver.observe(bar));

    return () => { revealObserver.disconnect(); barObserver.disconnect(); };
  }, []);
  return null;
}
