import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarApi } from "@fullcalendar/core";

const Attendance = () => {
  const calendarRef = useRef<FullCalendar | null>(null);

  const events: any = [
    {
      title: "Ramzan Id",
      start: "2025-03-31",
      end: "2025-04-01",
      allDay: true,
      status: "Leave",
      color: "#f0b100", // yellow-400
    },
    {
      title: "Rama Navami",
      start: "2025-04-06",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Vaisakhi",
      start: "2025-04-13",
      end: "2025-04-15",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Bahag Bihu/Vaisakhadi",
      start: "2025-04-14",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Mahavir Jayanti",
      start: "2025-04-10",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Good Friday",
      start: "2025-04-18",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Easter Day",
      start: "2025-04-20",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Birthday of Rabindranath",
      start: "2025-04-30",
      allDay: true,
      status: "Leave",
      color: "#f0b100",
    },
    {
      title: "Present",
      start: "2025-04-01",
      allDay: true,
      status: "Present",
      color: "#06b6d4", // cyan-500
    },
    {
      title: "Absent",
      start: "2025-04-02",
      allDay: true,
      status: "Absent",
      color: "#fb2c36", // red-500
    },
  ];
  
   // Replace with your events array
  const handleDateSelect = (selectInfo: any) => {};
  const handleEventClick = (clickInfo: any) => {};
  const renderEventContent = (eventInfo: any) => (
    <div>{eventInfo.event.title}</div>
  );
  const openModal = () => {};

  return (
    <div className="space-y-6 min-h-screen">
      {/* Attendance Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-sky-500 text-white p-4 rounded-xl shadow">
          <div className="text-sm">This Month Till Today</div>
          <div className="flex justify-between items-center mt-2 text-lg font-semibold">
            <span>Present</span>
            <span>1</span>
          </div>
          <div className="flex justify-between items-center mt-1 text-lg font-semibold">
            <span>Absent</span>
            <span>0</span>
          </div>
        </div>
        <div className="bg-rose-400 text-white p-4 rounded-xl shadow">
          <div className="text-sm">Academic Year Till Today</div>
          <div className="flex justify-between items-center mt-2 text-lg font-semibold">
            <span>Present</span>
            <span>4</span>
          </div>
          <div className="flex justify-between items-center mt-1 text-lg font-semibold">
            <span>Absent</span>
            <span>1</span>
          </div>
        </div>
        <div className="bg-indigo-400 text-white p-4 rounded-xl shadow">
          <div className="text-sm">Attendance Percentage</div>
          <div className="flex justify-between items-center mt-2 text-lg font-semibold">
            <span>Required</span>
            <span>75%</span>
          </div>
          <div className="flex justify-between items-center mt-1 text-lg font-semibold">
            <span>Current</span>
            <span>2.76%</span>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-xl shadow p-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth",
          }}
          events={events}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          customButtons={{
            addEventButton: {
              text: "Add Event +",
              click: openModal,
            },
          }}
        />
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block"></span> Present
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Absent
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span> Leave
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-indigo-300 text-white px-4 py-2 rounded hover:bg-indigo-400">
            Apply Leave
          </button>
          <button className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500">
            Appointments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
