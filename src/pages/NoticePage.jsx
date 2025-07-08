import React from "react";
import "./Noticepage.css"

const Notices = () => {
  const notices = [
    {
      title: "Midterm Examination Notice",
      date: "January 15, 2024",
      content:
        "The midterm examinations will begin on January 15, 2024. Timetables have been distributed to all students. Please prepare accordingly.",
    },
    {
      title: "Admissions Open",
      date: "March 10, 2024",
      content:
        "Admissions for the academic year 2024-2025 are now open for grades 1 to 12. The last date for form submission is March 10, 2024.",
    },
    {
      title: "Annual Sports Day",
      date: "February 20, 2024",
      content:
        "Join us for our Annual Sports Day on February 20, 2024. Parents and guardians are invited to witness the event.",
    },
    {
      title: "Parent-Teacher Meeting",
      date: "January 25, 2024",
      content:
        "The next Parent-Teacher Meeting will be held on January 25, 2024. Timings: 10:00 AM to 2:00 PM.",
    },
    {
      title: "Winter Vacation Announcement",
      date: "December 20, 2023 - January 5, 2024",
      content:
        "The school will remain closed for winter vacation from December 20, 2023, to January 5, 2024. Classes will resume on January 6, 2024.",
    },
  ];

  return (
    <div className="notices-section">
      <h1 className="notices-title">Notices</h1>
      <p className="quotes">The beautiful thing about learning is that no one can take it away from you</p>
      <hr />
      <div className="notices-container">
        {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <h2 className="notice-title">{notice.title}</h2>
            <p className="notice-date">{notice.date}</p>
            <p className="notice-content">{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
