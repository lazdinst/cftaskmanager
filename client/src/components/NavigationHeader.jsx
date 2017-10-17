import React from 'react';
import { Container, Menu, } from 'semantic-ui-react';

// Define the main app class
const NavigationHeader = () => {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            CF Task Management App
          </Menu.Item>
          <Menu.Item as='a'>Talis Lazdins</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default NavigationHeader;