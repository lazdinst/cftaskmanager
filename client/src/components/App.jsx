import React from 'react';
import axios from 'axios';

// Import React Components
import NavigationHeader from './NavigationHeader.jsx';
import MainContainer from './MainContainer.jsx';

// Define the main app class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavigationHeader />
        <MainContainer />
      </div>
    );
  }
}

export default App;