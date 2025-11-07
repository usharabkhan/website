import { Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { roles } from "../../data/data";
import { gsap } from "gsap";

export default function RollingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the old value out
    tl.fromTo(
      "#rolling-text",
      { opacity: 1, yPercent: 0 },
      { duration: 0.5, opacity: 0, yPercent: -50, ease: "power1" }
    );

    // Update text content to new value
    tl.call(() => {
      document.querySelector("#rolling-text")!.textContent = roles[currentIndex];
    });

    // Animate the new value in
    tl.fromTo(
      "#rolling-text",
      { opacity: 0, yPercent: 50 },
      { duration: 0.5, opacity: 1, yPercent: 0, ease: "power1" }
    );
  }, [currentIndex, roles]);

  return (
    <div
      id="sub-heading"
      className="flex flex-col md:flex-row flex-wrap justify-center text-white text-2xl"
    >
      <p className="font-light">I am Usharab, an Early-Career&nbsp;</p>
      <p id="rolling-text" className="font-medium text-secondary" />
    </div>
  );
}
