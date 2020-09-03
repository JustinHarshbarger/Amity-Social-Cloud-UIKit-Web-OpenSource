import React, { useState } from 'react';
import { customizableComponent } from 'hocs/customization';
import Avatar from 'components/Avatar';
import Popover from 'components/Popover';
import Menu, { MenuItem } from 'components/Menu';
import { LayoutHeader, Username, DropdownIcon, DropDownContainer } from './styles';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = 'Jackies';

  return (
    <LayoutHeader>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
      >
        <Avatar />
      </div>
      <Username>{username}</Username>
      <Popover
        position="bottom"
        isOpen={isOpen}
        align="end"
        content={
          <Menu>
            <MenuItem>Log out</MenuItem>
          </Menu>
        }
      >
        <DropDownContainer onClick={() => setIsOpen(!isOpen)}>
          <DropdownIcon />
        </DropDownContainer>
      </Popover>
    </LayoutHeader>
  );
};

export default customizableComponent('Layout')(Layout);
