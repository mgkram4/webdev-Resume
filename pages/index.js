import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "./images";
import Lottie from "lottie-react";
// import animationData from "./pages/assets/41675-phone-and-email-communication-animation.json";
import img1 from "./assets/Screenshot 2023-05-24 at 5.39.33 PM.png";
import { Popover } from "@headlessui/react";
import ProjectCard from "./productCard";
import { Project } from "./projects";

export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const containerRef = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  return (
    <div className="">
      {/* HERO */}
      <div className="flex min-h-screen bg-hero bg-no-repeat bg-cover scroll-snap-align-start">
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <div className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-4xl p-6  rounded-xl">
            Hi, I'm&nbsp;
            <span className="text-[rgba(0,102,255,255)]  transition-all duration-300 hover:text-[rgba(140,200,254,255)]">
              Mark Garcia
            </span>
          </div>
          <div className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-xl p-4 m-6  rounded-xl">
            JAMstack Web Developer
          </div>
          <button
            onClick={handleClick}
            className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-lg p-4 m-4 rounded-xl  transition-transform duration-300 hover:bg-blue-10 hover:text-slate-50 hover:opacity-95 hover:-translate-y-1 hover:shadow-2xl "
          >
            About Me
          </button>
        </div>
      </div>

      {/* About Me */}
      <div
        ref={ref}
        className="flex min-h-screen bg-aboutMe bg-no-repeat bg-cover md:flex-row scroll-snap-align-start"
      >
        <div className="flex flex-col mx-auto text-center items-center lg:flex-row lg:h-auto max-w-screen-xl w-screen">
          <div className="items-center justify-center p-8 lg:flex-3">
            <img
              src="./presentationSeta.jpg"
              alt=""
              className="rounded-3xl flex-shrink-0 m-auto max-w-3/5 lg:max-w-xl max-h-3/5"
            />
          </div>

          <div className="flex flex-col justify-center items-center min-h-screen w-4/5">
            <div className="font-semibold text-lg md:text-xl lg:text-2xl m-2">
              About Me
            </div>
            <div className="font-semibold bg-slate-50 p-4 w-4/5 text-base md:text-lg lg:text-xl rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
              <div className="mb-4">
                My name is Mark Garcia. I am a recent graduate from the
                University of La Verne. At the university, I fell in love with
                creating web applications and learning about disruptive
                technologies.
              </div>
              <div className="mt-4">
                Aside from my passion for web development, I love spending time
                with my friends, family, and my cats Tom and Lucy. Some of my
                hobbies include watching sports, getting outdoors, and watching
                live music!
              </div>
            </div>

            <div className="font-semibold mt-8 text-lg md:text-xl lg:text-2xl m-2">
              Accomplishments
            </div>
            <div className="flex flex-wrap md:flex-col justify-center gap-2 md:w-4/5">
              <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
                Bachelor of Science in E-Commerce
              </div>
              <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
                Cetification of Achievment: Systems Engineering
              </div>
              <div className="font-semibold bg-slate-50 w-full md:auto p-4 mt-2 text-sm md:text-base lg:text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-md transition-all">
                Computer Science and Computer Engineering: Departmental Honors
              </div>
            </div>

            <button
              onClick={handleClick2}
              className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-lg p-4 m-2 rounded-xl hover:shadow-lg transition-all duration-200 hover:bg-blue-10 hover:text-slate-50 hover:opacity-90 "
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Tech */}

      <div
        ref={ref2}
        className="flex min-h-screen bg-tech bg-no-repeat bg-cover scroll-snap-align-start"
      >
        <div className="flex flex-col justify-center items-center min-h-screen w-screen ">
          <div className="font-semibold m-2">Technologies</div>
          <motion.div
            ref={carousel}
            whileTap={"grabbing"}
            className="flex flex-col items-center justify-center bg-slate-50 w-4/5 cursor-grab overflow-hidden rounded-md shadow-md "
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: +width }}
              className="flex p-2 m-4 space-x-8 "
            >
              {images.map((image) => (
                <motion.div key={image}>
                  <Image
                    src={image}
                    alt=""
                    className="w-80 h-10 m-4 pointer-events-auto "
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="font-semibold m-2"> Projects </div>
          <div className="flex items-center justify-center bg-slate-50 w-4/5 rounded-md shadow-lg ">
            <div className="flex">
              {Project.map((Project) => (
                <ProjectCard
                  key={Project.id}
                  id={Project.id}
                  name={Project.name}
                  img={Project.img}
                />
              ))}
            </div>
          </div>

          <div className="font-semibold m-2"> Recommendations </div>
          <div className="flex gap-2 w-4/5 m-2  ">
            <div className="font-semibold bg-slate-50 w-2/5 p-4 mt-2 hover:scale-105 hover:shadow-md transition-all rounded-md shadow-lg  ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              hic repellendus tempore placeat nesciunt molestiae a dolore
              ratione, sit temporibus.
            </div>
            <div className="font-semibold bg-slate-50 w-2/5 p-4 mt-2 hover:scale-105 hover:shadow-md transition-all rounded-md shadow-lg ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              hic repellendus tempore placeat nesciunt molestiae a dolore
              ratione, sit temporibus.
            </div>
            <div className="font-semibold bg-slate-50 w-2/5 p-4 mt-2 hover:scale-105 hover:shadow-md transition-all rounded-md shadow-lg ">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              hic repellendus tempore placeat nesciunt molestiae a dolore
              ratione, sit temporibus.
            </div>
          </div>
          <button
            onClick={handleClick3}
            className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-lg p-4 m-2 rounded-xl hover:shadow-lg transition-all duration-200 hover:bg-blue-10 hover:text-slate-50 hover:opacity-90 "
          >
            Contact
          </button>
        </div>
      </div>

      {/* Contact */}
      <div
        ref={ref3}
        className="flex min-h-screen bg-contact bg-no-repeat bg-cover scroll-snap-align-start"
      >
        <div className="flex flex-col justify-center items-center min-h-screen w-screen">
          <div className="bg-slate-100 p-8 rounded-xl py-2">
            <div className="flex font-bold p-4 text-2xl justify-center">
              Let's Connect!
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <label className="text-xl">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 px-4 py-2 mt-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <label className="text-xl">Subject</label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="border border-gray-300 px-4 py-2 mt-2 rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <label className="text-xl">Message</label>
              <textarea
                placeholder="Enter your message"
                className="border border-gray-300 px-4 py-2 mt-2 rounded"
              ></textarea>
              <button className="flex justify-center items-center bg-slate-50 shadow-md font-semibold text-lg p-4 m-2 rounded-xl hover:shadow-lg transition-all duration-200 hover:bg-blue-10 hover:text-slate-50 hover:opacity-90 ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-4/5 mr-24">
          <div className="flex gap-2 w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
