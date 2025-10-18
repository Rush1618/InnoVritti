import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Shravani Patil', portfolio: 'Overall Coordinator', branch: 'ECE' },
    { name: 'Rushabh Singh', portfolio: 'Technical Team', branch: 'CO' },
    { name: 'Adarsh Pandey', portfolio: 'Technical Team', branch: 'CSE-AIML' },
    { name: 'Aryan Singh', portfolio: 'Technical Team', branch: 'ME' },
    { name: 'Shubham Sahu', portfolio: 'Content & Research Team', branch: 'ECE' },
    { name: 'Yash Kansara', portfolio: 'Content & Research Team', branch: 'ECE' },
    { name: 'Aayush Gajjar', portfolio: 'Marketing & PR Team', branch: 'IT' },
    { name: 'Neeti Parmar', portfolio: 'Marketing & PR Team', branch: 'CSE-AIML' },
    { name: 'Aashi Srivastava', portfolio: 'Marketing & PR Team', branch: 'CSE-AIML' },
    { name: 'Aditi Sah', portfolio: 'Strategy & Planning Team', branch: 'CSE-AIML' },
    { name: 'Kashish Mishra', portfolio: 'Event Managing Team', branch: 'ECE' },
    { name: 'Yash Vaidya', portfolio: 'Event Managing Team', branch: 'IT' },
    { name: 'Rohit Prajapati', portfolio: 'Event Managing Team', branch: 'CSE-AIML' },
  ];

  return (
    <div className="container py-5 fade-in">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Team Members and Portfolios</h2>
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Roles</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.portfolio}</td>
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
