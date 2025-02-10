import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <span className="text-blue-600">R</span>emiflow
          </h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">X</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">YouTube</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Use cases</h3>
          <ul className="space-y-1">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center">
        <p>© 2025 Remiflow. All Rights Reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;