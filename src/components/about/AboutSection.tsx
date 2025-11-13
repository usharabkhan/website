import { useEffect } from "react";
import { gsap } from "gsap";
import { MdOutlineWavingHand } from "react-icons/md";
import Socials from "../common/socials";
import MyImage from "../../assets/image/me.png";
import RollingText from "./RollingText";
import TechnologyPill from "../projects/TechnologyPill";
import { bio, OtherLogos } from "../../data/data";
import { Heading } from "../common/heading";
import { Text } from "@radix-ui/themes";

export default function HeroSection() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#hero",
      { opacity: 0, y: -30 },
      { duration: 1, opacity: 1, y: 0, ease: "power3.out" }
    );

    tl.fromTo(
      "#intro, #my-image, #sub-heading, #my-tags, #lets-connect, #bio",
      { opacity: 0, y: 20 },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.1,
        delay: -0.5,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="about-section" className="w-full p-5 pt-10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 rounded-full" />
        <div className="absolute top-20 right-20 w-60 h-60 border border-secondary/20 rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border border-primary/20 rounded-full" />
      </div>

      <div
        id="hero"
        className="relative bg-gradient-to-br from-container via-accent to-container rounded-2xl grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-10 md:p-16 space-y-8 md:space-y-0 md:gap-12 shadow-2xl border border-borderColor overflow-hidden"
      >
        {/* Card inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-6 items-center relative z-10">
          {/* IMAGE */}
          <img
            id="my-image"
            src={MyImage}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full shadow-2xl object-cover border-4 border-primary/30 ring-4 ring-primary/10"
          />
          {/* NAME & POSITION */}
          <div id="intro" className="text-center">
            <div className="text-2xl font-semibold flex items-center gap-x-2 justify-center text-text">
              Hi there!
              <MdOutlineWavingHand className="text-yellow-400 animate-wave" />
            </div>
            <RollingText />
          </div>

          {/* TAGS */}
          <div id="my-tags" className="grid grid-cols-2 gap-3 place-items-center">
            <TechnologyPill text="University of Calgary" img={OtherLogos["uni"]} />
            <TechnologyPill text="Class of 2025" img={OtherLogos["class"]} />
            <TechnologyPill text="Computer Science" img={OtherLogos["compsci"]} />
            <TechnologyPill text="Microsoft Certified" img={OtherLogos["microsoft"]} />
          </div>
          {/* SOCIALS */}
          <div id="lets-connect">
            <Socials />
          </div>
        </div>
        {/* BIOGRAPHY */}
        <div id="bio" className="flex flex-col gap-6 text-text h-full items-center justify-center relative z-10">
          <Heading>About Me</Heading>
          <Text
            weight="regular"
            className="text-regular text-center md:text-justify whitespace-pre-line leading-relaxed text-base"
          >
            {bio}
          </Text>
        </div>
      </div>
    </section>
  );
}
