import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {Link, NavLink} from 'react-router-dom';
// icons
import {
  Dashboard,
  Groups,
  AccountTree,
  Summarize
} from '@mui/icons-material';

export const mainListItems = (
  <div>
    <ListItem button exact to="/" component={NavLink} activeClassName="active">
      <ListItemIcon>
        <Dashboard style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button to="/projects" component={NavLink} activeClassName="active">
      <ListItemIcon>
        <AccountTree style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button to="/team" component={NavLink} activeClassName="active">
      <ListItemIcon>
        <Groups style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Bootcamp Team" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Details</ListSubheader>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);