// src/components/common/CalendarView.tsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView: React.FC = () => {
  const [events] = useState([
    { title: 'Design review', date: '2025-04-21', time: '10AM' },
    { title: 'Sales meeting', date: '2025-04-21', time: '2PM' },
    { title: 'Sam\'s birthday party', date: '2025-04-22', time: '2PM' },
    { title: 'Cinema with friends', date: '2025-04-28', time: '9PM' },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Month view</h2>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded">
          Add event
        </button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="auto"
        events={events.map(e => ({ title: `${e.title} ${e.time}`, date: e.date }))}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
      />
    </div>
  );
};

export default CalendarView;
