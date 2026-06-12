import { useParams, Link } from "react-router-dom";

import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === id
  );

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#070b18] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <Link
          to="/"
          className="text-cyan-300"
        >
          ← Back
        </Link>

        <h1 className="text-5xl font-black mt-8 mb-10">
          {project.title}
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt=""
                className="w-full rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <p>
            {project.description}
          </p>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-cyan-500 px-6 py-3 rounded-xl"
        >
          GitHub Repository
        </a>

      </div>

    </div>
  );
}