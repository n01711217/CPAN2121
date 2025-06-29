import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from '../components/ProjectModal';

import beninImg from '../assets/Travel-to-Benin-683x1024.png';
import converterImg from '../assets/imageonline.jpg';
import productImg from '../assets/R.jpeg';
import bookstoreImg from '../assets/OIP.webp';

const projects = [
  {
    id: 1,
    title: 'Lab 3 - Bookstore Web App',
    description: 'A Node.js project with server-side routing and HTML rendering.',
    image: bookstoreImg,
  },
  {
    id: 2,
    title: 'Lab 6 - Converter App',
    description: 'A React Native app for unit conversion using controlled inputs.',
    image: converterImg,
  },
  {
    id: 3,
    title: 'Lab 9 - Product Filter App',
    description: 'React Native project using Redux to filter and display items.',
    image: productImg,
  },
  {
    id: 4,
    title: 'Benin Guide App',
    description: 'A tourism guide app showing culture and places in Benin.',
    image: beninImg,
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj) => (
          <div className="card" key={proj.id} onClick={() => setSelected(proj)}>
            <img src={proj.image} alt={proj.title} />
            <div className="card-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default Projects;
