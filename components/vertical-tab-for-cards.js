import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One" {...a11yProps(6)} />
                    <Tab label="Item Two" {...a11yProps(7)} />
                    <Tab label="Item Three" {...a11yProps(8)} />
                    <Tab label="Item Four" {...a11yProps(9)} />
                    <Tab label="Item Five" {...a11yProps(10)} />
                    <Tab label="Item Six" {...a11yProps(11)} />
                    <Tab label="Item Seven" {...a11yProps(12)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={6}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={7}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={8}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={9}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={10}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={11}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={12}>
                Item Seven
            </TabPanel>
        </div>
    );
}
