import React from 'react';
import ScheduleImg from '../assets/Schedule.png'

const Schedule = () => {
  return (
    <div id="schedule" className="p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="font-bold text-2xl text-indigo-600">Workshop Schedule</h2>
      <div className="mt-4">
        <img 
          src={ScheduleImg}
          alt="Workshop Schedule" 
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>
    </div>
  );
}

export default Schedule;