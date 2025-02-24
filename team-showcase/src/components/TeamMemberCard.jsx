import React from 'react';

const TeamMemberCard = ({ name, jobTitle }) => {
  return (
    <div style={{ border: '1px solid white', padding: '1rem', margin: '1rem', borderRadius: '15px', textAlign: 'center'}}>
      <h2>{name}</h2>
      <p>{jobTitle}</p>
    </div>
  );
};

export default TeamMemberCard;