import React from "react";
import TimelineContainer from "../components/events/TimelineContainer";
import headerImage from "../assets/image.JPG";

function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt="Header background"
            className="w-full h-full object-cover brightness-60"
          />
        </div>
        <div className="relative z-10 h-full flex items-center px-10 py-2">
          <h1 className="text-6xl font-bold">
            OUR
            <br />
            <span className="text-red-700 text-9xl">EVENTS</span>
          </h1>
        </div>
      </header>
      <main className="relative">
        <TimelineContainer />
      </main>
    </div>
  );
}

export default Events;
