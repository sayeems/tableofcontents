import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {Link} from 'react-router-dom';
// icons
import {
  Dashboard,
  Groups,
  AccountTree,
  Summarize
} from '@mui/icons-material';

export const mainListItems = (
  <div>
    <ListItem button to="/" component={Link}>
      <ListItemIcon>
        <Dashboard style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button to="/projects" component={Link}>
      <ListItemIcon>
        <AccountTree style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button to="/team" component={Link}>
      <ListItemIcon>
        <Groups style={{color:'#000000'}} />
      </ListItemIcon>
      <ListItemText primary="Team" />
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