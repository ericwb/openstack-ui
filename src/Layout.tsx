import type { ReactNode } from "react";
import {
  AppBar,
  CheckForApplicationUpdate,
  Layout as RALayout,
  Logout,
  Menu,
  TitlePortal,
  UserMenu,
} from "react-admin";
import { Box, MenuItem,Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const CustomUserMenu = () => (
    <UserMenu>
        <MenuItem>{localStorage.getItem("username")}</MenuItem>
        <Menu.Item
            to={`/identity/v3/users/${localStorage.getItem("user_id")}/show`}
            primaryText="Profile"
            leftIcon={<PersonIcon />}
        />
        <Menu.Item
            to="/configuration"
            primaryText="Settings"
            leftIcon={<SettingsIcon />}
        />
        <Logout />
    </UserMenu>
);

const CustomAppBar = () => (
    <AppBar color="primary" userMenu={<CustomUserMenu />}>
      <TitlePortal />
      <Box flex="1" />
    </AppBar>
);


export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={CustomAppBar}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
