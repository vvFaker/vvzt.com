import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function VerticalTabs(props) {
    const [value, setValue] = useState(0);
    const classes = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: '100%',
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    }))();
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                className={classes.tabs}
            >
                {
                    props.tabs && props.tabs.map((tab, index) => (
                        <Tab label={tab} {...a11yProps(index)} key={index} />
                    ))
                }
            </Tabs>
            {props.children}
        </div>
    );
}