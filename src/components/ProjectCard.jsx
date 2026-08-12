import React from 'react'
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card group transition duration-300 hover:-translate-y-1">
      <div className="project-image overflow-hidden">
        <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <span className="project-number">{project.number}</span>
        <span className="project-link"><ArrowUpRight size={18} /></span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </Link>
  );
}