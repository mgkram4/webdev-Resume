import { Popover } from "@headlessui/react";
import { Project } from "pages/projects";
import Image from "next/image";

function ProjectCard(props) {
  const { id, name, img } = props;

  // {/* Card

  return (
    // Gen Container
    <div className=" m-2 p-2 gap-2 h-50 w-44 rounded-xl bg-slate-200 shadow-md items-center justify-center ">
      {/* Name */}
      <div className="text-center mb-2 font-bold">{name}</div>
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={img}
          className="text-center justify-center rounded-xl h-20 w-20"
        />
      </div>
      {/* Buttons  */}
      <div className="flex justify-center gap-4 mt-2 ">
        <button className="w-full rounded-lg bg-slate-300 p-1 shadow-sm hover:-translate-y-0.5 transition-all hover:shadow-2xl border-2 hover:border-slate-700 ">
          Demo
        </button>

        <Popover className="relative w-full">
          <Popover.Button className="w-full rounded-lg bg-slate-300 p-1 shadow-sm hover:-translate-y-0.5 transition-all hover:shadow-2xl border-2 hover:border-slate-700">
            Log
          </Popover.Button>

          <Popover.Panel className="flex flex-col justify-center bg-slate-50 rounded-md h-30 gap-1 absolute z-10 px-3 py-1 ">
            <a href="/analytics" className="text-blue-600 hover:opacity-70">
              Repository
            </a>
            <a href="/engagement" className="text-blue-600 hover:opacity-70">
              SDLC
            </a>
            <a href="/security" className="text-blue-600 hover:opacity-70">
              Literature
            </a>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

export default ProjectCard;
