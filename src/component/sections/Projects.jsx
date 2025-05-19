import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Wrapster */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500 hover:shadow transition">
              <h3 className="font-bold text-2xl mb-1">Founder & Developer</h3>
              <h2 className="font-bold">
                <span className="font-extrabold">Wrapster</span>{' '}
                <span className="font-extralight italic">(formerly Stick-o-mania)</span> – Laptop Skin E-commerce Store
              </h2>
              <p className="text-sm mb-2 text-gray-400">Self-hosted on Odoo | August 2024 – Present</p>
              <p className="mb-4 text-gray-300">
                Built and deployed a full-featured laptop skin e-commerce store on Odoo. Integrated product catalog, Razorpay payments, and ERP backend using custom modules and Python scripts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Odoo Studio', 'Razorpay API', 'ERP Customization', 'QWeb/HTML'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500/70 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://wrapster.odoo.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Currency Converter Extension */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500 hover:shadow transition">
              <h2 className="font-bold text-xl mb-2">Currency Converter Extension</h2>
              <p className="mb-4 text-gray-300">
                A browser extension that fetches real-time exchange rates from an external API. Clean UI and instant conversion in-browser.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['JavaScript', 'HTML', 'CSS', 'REST API'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500/70 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://chrome.google.com/webstore/detail/obbpmdagonafcfojhkfkfppmfjicpjeo"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Extension →
                </a>
              </div>
            </div>

            {/* Tic-Tac-Toe */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500 hover:shadow transition">
              <h2 className="font-bold text-xl mb-2">Tic-Tac-Toe Game</h2>
              <p className="mb-4 text-gray-300">
                Classic Tic-Tac-Toe game with clean interface, win detection, and responsive layout for mobile and desktop.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['JavaScript', 'HTML', 'CSS'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500/70 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://jainrachit03.github.io/Tic-Tac-Toe"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jainrachit03/Tic-Tac-Toe"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Rock-Paper-Scissors */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500 hover:shadow transition">
              <h2 className="font-bold text-xl mb-2">Rock-Paper-Scissors Game</h2>
              <p className="mb-4 text-gray-300">
                Interactive game with animation, score tracking, and fun UI. Fully responsive and beginner-friendly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['JavaScript', 'HTML', 'CSS'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500/70 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://jainrachit03.github.io/Rock-Paper-Scissors"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jainrachit03/Rock-Paper-Scissors"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500 hover:shadow transition">
              <h2 className="font-bold text-xl mb-2">To-Do List App</h2>
              <p className="mb-4 text-gray-300">
                A clean and efficient to-do list application with add/delete functionality, local storage support, and minimalist UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'HTML', 'CSS', 'LocalStorage','Next.js'].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500/70 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://todo-list-app-f6qq.vercel.app/" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/jainrachit03/todo-list-app" // Change to your actual repo
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
