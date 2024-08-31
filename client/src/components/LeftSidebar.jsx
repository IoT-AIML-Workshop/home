import React from 'react';

const LeftSidebar = () => {
  return (
    <div className="w-full md:w-1/3 space-y-6">
      <div id="news" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Latest News</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Registration is now open! Don't miss out on this opportunity.</li>
          <li className="text-gray-600">🔹 Dr. Smith will be delivering a keynote on Day 1. Mark your calendar!</li>
          <li className="text-gray-600">🔹 Workshop materials are available online for registered participants.</li>
        </ul>
      </div>
      <div id="organizing-committee" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Organizing Committee</h2>
        <p className="mt-4 text-gray-600">Faculty Coordinators</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Dr. Abhishek Hazra</li>
          <li className="text-gray-600">🔹 Dr. Pavan Kumar B N</li>
          <li className="text-gray-600">🔹 Dr. Bheemappa Halavar</li>
        </ul>
        <p className="mt-4 text-gray-600">Student Coordinators</p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">🔹 Raju Immandi</li>
          <li className="text-gray-600">🔹 Chandra Sai Teja Adhikarla</li>
          <li className="text-gray-600">🔹 Veera Manikanta Rayudu</li>
        </ul>
      </div>
      <div id="archive" className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600">Event Archive</h2>
        <p className="mt-4 text-gray-600">
          Explore previous workshops, materials, and recorded sessions in our comprehensive archive.
        </p>
      </div>
    </div>
  );
}

export default LeftSidebar;