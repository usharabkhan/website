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
    <section id="about-section" className=" w-full p-5">
      <div
        id="hero"
        className="bg-black rounded-lg grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto p-10 md:p-16 space-y-4"
      >
        <div className="flex flex-col gap-4 items-center">
          {/* IMAGE */}
          <img
            id="my-image"
            src={MyImage}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full shadow object-cover"
          />
          {/* NAME & POSITION */}
          <div id="intro" className="text-center">
            <div className="text-2xl font-medium flex items-center gap-x-2 justify-center text-white">
              Hi there!
              <MdOutlineWavingHand className="text-yellow-500 animate-wave" />
            </div>
            <RollingText />
          </div>

          {/* TAGS */}
          <div id="my-tags" className="grid grid-cols-2 gap-2 place-items-center">
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
        <div id="bio" className="flex flex-col gap-4 text-white h-full items-center justify-center">
          <Heading>About Me</Heading>
          <Text
            weight="regular"
            className="text-white text-center md:text-justify whitespace-pre-line leading-relaxed"
          >
            {bio}
          </Text>
        </div>
      </div>
    </section>
  );
}
