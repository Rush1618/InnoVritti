import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Shravani Patil', role: 'Overall Coordinator', branch: 'ECE' },
    { name: 'Rushabh Singh', role: 'Technical Team', branch: 'CO' },
    { name: 'Adarsh Pandey', role: 'Technical Team', branch: 'CSE-AIML' },
    { name: 'Aryan Singh', role: 'Technical Team', branch: 'ME' },
    { name: 'Shubham Sahu', role: 'Content & Research Team', branch: 'ECE' },
    { name: 'Yash Kansara', role: 'Content & Research Team', branch: 'ECE' },
    { name: 'Aayush Gajjar', role: 'Marketing & PR Team', branch: 'IT' },
    { name: 'Neeti Parmar', role: 'Marketing & PR Team', branch: 'CSE-AIML' },
    { name: 'Aashi Srivastava', role: 'Marketing & PR Team', branch: 'CSE-AIML' },
    { name: 'Aditi Sah', role: 'Strategy & Planning Team', branch: 'CSE-AIML' },
    { name: 'Kashish Mishra', role: 'Event Managing Team', branch: 'ECE' },
    { name: 'Yash Vaidya', role: 'Event Managing Team', branch: 'IT' },
    { name: 'Rohit Prajapati', role: 'Event Managing Team', branch: 'CSE-AIML' },
  ];

  return (
    <div className="container py-5 fade-in">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Team Members and Roles</h2>
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.role}</td>
                    <td>{member.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
