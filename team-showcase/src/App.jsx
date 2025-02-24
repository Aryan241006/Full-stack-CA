import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TeamMemberCard name="John Doe" jobTitle="Software Engineer" />
      <TeamMemberCard name="Jake Paul" jobTitle="Product Manager" />
    </div>
  );
};

export default App;