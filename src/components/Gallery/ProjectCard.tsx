import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { formatTags, getImage } from "../../lib";

interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  link?: string;
  tags: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      {/* {JSON.stringify({ data: image })} */}
      <div className="aspect-video w-full overflow-hidden">
        {getImage(image) && (
          <img
            src={getImage(image)}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {formatTags(tags).map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
