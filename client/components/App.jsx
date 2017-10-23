import React from 'react';

// Import React Components
import NavigationHeader from './NavigationHeader.jsx';
import MainContainer from './MainContainer.jsx';

// Define the main app class
export const App = () => {
  return (
    <div >
      <NavigationHeader />
      <MainContainer />
    </div>
  );
};

export default App;