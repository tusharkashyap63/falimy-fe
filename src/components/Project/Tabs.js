import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiSettings, FiLogOut, FiHome, FiUser } from 'react-icons/fi';

export default function Tabs() {
  return (
    <Box bgColor="purple.600" p="3.5">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FiSettings />}
        />
        <MenuList>
          <MenuItem icon={<FiUser />}>Profile</MenuItem>
          <MenuItem icon={<FiHome />}>Family Settings</MenuItem>
          <MenuDivider />
          <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        </MenuList>
      </Menu>
      {/* <IconButton /> */}
    </Box>
  );
}
