import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../appStore';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CampaignIcon from '@mui/icons-material/Campaign';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  //const [open, setOpen] = React.useState(true);
  const navigate= useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display:'flex',bgcolor:'black'}}>
      <CssBaseline />
      <Box height={30}/>
      <Drawer variant="permanent" open={open}  PaperProps={{
    sx: {
      backgroundColor: "white",
      
    }
  }}>
         <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          </DrawerHeader> 
          <Box height={30}/>
        <List >
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/home")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardIcon sx={{color:"#002984"}}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 ,color:"#212121",fontSize:"15px",fontWeight:"bold"}}disableTypography />
              </ListItemButton>
            </ListItem>
        
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/users")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <GroupIcon sx={{color:"#002984"}}/>
                </ListItemIcon>
                <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 ,color:"#212121",fontSize:"15px",fontWeight:"bold"}}disableTypography  />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/campaign")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <CampaignIcon sx={{color:"#002984"}}/>
                </ListItemIcon>
                <ListItemText primary="Campaign" sx={{ opacity: open ? 1 : 0 ,color:"#212121",fontSize:"15px",fontWeight:"bold"}}disableTypography  />
              </ListItemButton>
            </ListItem>
        
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/reports")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AssessmentIcon sx={{color:"#002984"}}/>
                </ListItemIcon>
                <ListItemText primary="Report" sx={{ opacity: open ? 1 : 0 ,color:"#212121",fontSize:"15px",fontWeight:"bold"}}disableTypography />
              </ListItemButton>
            </ListItem>
        </List> 
      </Drawer>
    </Box>
  );
}