"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    const move = (event: MouseEvent) => {
      mouseX = event.clientX; mouseY = event.clientY;
      cursor.style.left = `${mouseX - 4}px`;
      cursor.style.top = `${mouseY - 4}px`;
    };
    document.addEventListener("mousemove", move);
    let frame = 0;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX - 18}px`;
      ring.style.top = `${ringY - 18}px`;
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, []);
  return <><div id="cursor" /><div id="cursor-ring" /></>;
}
