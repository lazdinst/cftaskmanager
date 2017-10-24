import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

function NavigationHeader() {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            CF Task Management App
          </Menu.Item>
          <Menu.Item as='a' href='https://www.google.com/search?q=Talis+Lazdins'>Talis Lazdins</Menu.Item>
          <Menu.Item as='a' href='https://www.linkedin.com/in/talis-lazdins/'><Icon name='linkedin'/></Menu.Item>
          <Menu.Item as='a' href='https://github.com/lazdinst/'><Icon name='github'/></Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default NavigationHeader;