import React from "react";
import "./Eventpage.css";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Science Exhibition",
      date: "January 20, 2024",
      description:
        "Showcase of innovative science projects created by our students. Parents are invited to encourage young minds.",
      image: "sciencee.jpg",
    },
    {
      title: "Annual Sports Day 2023",
      date: "November 15, 2023",
      description:
        "A day full of thrilling sports activities and competitions among students.",
      image: "sport.jpg",
    },
    {
      title: "Cultural Day",
      date: "February 5, 2024",
      description:
        "An exciting day filled with cultural performances, traditional costumes, and delicious food stalls.",
      image: "cul.jpg",
    },
    {
      title: "parentsday",
      date: "February 5, 2024",
      description:
        "It is an important day to show appreciation towards parents for their commitment to raise a family, strengthen the bond of love, and creates an atmosphere of happiness and understanding between family members.",
      image: "pday.jpg",
    },
  ];

  const pastEvents = [
    {
      title: "Parents Teacher Meeting",
      date: "September 5, 2023",
      description:
        "A special day to honor our beloved teachers with heartfelt performances by students.",
      image: "ptm.jpg",
    },
    {
      title: "IOT and ROBOTICS WORKSHOP",
      date: "September 5, 2023",
      description:
        " IOT devices are programmed to handle specific tasks, whereas, robots are designed to learn from the environment while reacting to unforeseen conditions",
      image: "iot.jpg",
    },
    {
      title: "Talent Hunt",
      date: "September 5, 2023",
      description:
        "A talent hunt in a school is a competition or event that allows students to showcase their talents and abilities in a variety of areas. Talent hunts can help students develop their personalities, discover their hidden talents, and gain confidence. They can also help motivate other students to show off their own talents.",
      image: "tal.jpg",
    },
    {
      title: "Teej Geet Compitetion",
      date: "September 5, 2023",
      description:
        "Teej geet competitions in schools can be important because they can help students appreciate traditional songs in contemporary ways. They can also help students understand the importance of lyrics and the messages conveyed in songs. Teej is a Hindu festival that is celebrated in Nepal and North India. It is a combination of three festivals that are dedicated to the Hindu deities Parvatand Shiva.",
      image: "teej.jpg",
    },
  ];

  return (
    <div className="events-page">
      {/* Upcoming Events Section */}
      <div className="events-section">
        <h1 className="events-title">Upcoming Events</h1>
        <div className="events-container">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              {event.image && (
                <img
                  src={`${event.image}`}
                  alt={event.title}
                  className="event-image"
                />
              )}
              <div className="event-details">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="events-section">
        <h1 className="events-title">Past Events</h1>
        <div className="events-container">
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              {event.image && (
                <img
                  src={`${event.image}`}
                  alt={event.title}
                  className="event-image"
                />
              )}
              <div className="event-details">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
