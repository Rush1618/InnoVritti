import React from 'react';

const About = () => {
  return (
    <div className="container py-5 fade-in">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">About our E-Cell</h2>
          <p className="card-text">
            E-Cell is the official Entrepreneurship Cell of Thakur Shyamnarayan Engineering College, focused on nurturing innovation, creativity, and leadership among students. We aim to create a thriving ecosystem that empowers young minds to explore startup ideas and build impactful ventures.
          </p>
          <p className="card-text">
            Our logo, featuring a rising phoenix and three stars, reflects growth, vision, and excellence.
          </p>
          <p className="card-text">
            Guided by our motto “Innovate. Inspire. Impact.", we plan to organize workshops, hackathons, speaker sessions, and mentorship programs to spark entrepreneurial thinking on campus.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Vision and Mission</h2>
          <h4>Vision:</h4>
          <p className="card-text">
            To build a thriving entrepreneurial ecosystem within the campus that nurtures independent thinking, creative problem-solving, and real-world impact. We envision empowering student innovators to lead with purpose, transform ideas into ventures, and make meaningful contributions to society.
          </p>
          <h4>Mission:</h4>
          <ul>
            <li>To promote innovation and critical thinking through structured mentorship, workshops, and startup events.</li>
            <li>To provide students with the tools, a hub for innovation, inspiration, and impact. We are dedicated to fostering the entrepreneurial spirit among students.</li>
            <li>To instill values of excellence, achievement, and leadership, reflected in every initiative we undertake.</li>
            <li>To foster collaborations with industry, alumni, and the startup ecosystem for real-world learning and impact.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">What is NEC?</h2>
          <p className="card-text">
            The National Entrepreneurship Challenge (NEC) is a flagship initiative by E-Cell IIT Bombay, designed to foster entrepreneurship across college campuses in India. It aims to build a nationwide network of innovation-driven E-Cells by engaging students in a series of entrepreneurial tasks, workshops, and challenges that test creativity, leadership, and execution skills.
          </p>
          <p className="card-text">
            We are excited to announce that our E-Cell is an official participant in NEC 2025 by IIT Bombay. Through this national platform, we aim to amplify our efforts, compete with the best, and grow as a student-led entrepreneurial force.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;