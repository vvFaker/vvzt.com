import React, {  } from 'react'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



// export function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`scrollable-force-tabpanel-${index}`}
//             aria-labelledby={`scrollable-force-tab-${index}`}
//             {...other}
//         >
//         <Box p={3}>{children}</Box>
//         </Typography>
//     );
// }
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };


export default function Nav(props) {
    const classes = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }))();
    const [value, setValue] = React.useState(0);
    const handleChange = function (event, newValue) {
        props.onChangePage(newValue);
        setValue(newValue);
    }
    const a11yProps = function (index) {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                // scrollButtons="on"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="force tabs"
            >
                <Tab icon={<FavoriteIcon></FavoriteIcon>} {...a11yProps(0)} />
                <Tab icon={<FavoriteIcon></FavoriteIcon>} {...a11yProps(1)} />
                <Tab icon={<FavoriteIcon></FavoriteIcon>} {...a11yProps(2)} />
            </Tabs>
            </AppBar>

            {/* <TabPanel value={value} index={0}>
                {props.children.blog}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.children.funny}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {props.children.talking}
            </TabPanel> */}
        </div>
    )
}
