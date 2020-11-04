import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AppleIcon from '@material-ui/icons/Apple';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import LineStyleSharpIcon from '@material-ui/icons/LineStyleSharp';
import ScatterPlotSharpIcon from '@material-ui/icons/ScatterPlotSharp';
import ShowChartSharpIcon from '@material-ui/icons/ShowChartSharp';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import logo from '../images/logo.png';

import styled from 'styled-components';
import SimpleCard from './card';
import ScrollableTabsButtonAuto from './vertical-tab-for-cards';
import Grid from '@material-ui/core/Grid';
import Chart from './chart';
import Comment from './comments';
import InputMessage from './input-message';
import Discussion from './Discussion';
import { red } from '@material-ui/core/colors';
const StyledTab = styled(Tab)`
    min-width: 60px;
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E4E8F4',
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#01579b',
        minWidth: '55px',
        minHeight : '870px'
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <StyledTab
                    label=<img src={logo} style={{ width: '100px' }} />
                    style={{ height: '100%' }}
                    {...a11yProps(0)}
                />

                <StyledTab label=<BubbleChartIcon /> {...a11yProps(1)} />

                <StyledTab label=<DashboardRoundedIcon /> {...a11yProps(2)} />

                <StyledTab label=<LineStyleSharpIcon /> {...a11yProps(3)} />

                <StyledTab label=<ShowChartSharpIcon /> {...a11yProps(4)} />

                <StyledTab label=<CodeSharpIcon /> {...a11yProps(5)} />
            </Tabs>
            <TabPanel
                value={value}
                index={0}
                style={{ width: '100%', height: '100%' }}
            >
                <div className={classes.root}>
                    <Grid
                        container
                        style={{ width: '100%', height: '100%' }}
                        spacing={1}
                    >
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Pompe"
                                city="Aubure"
                                value="703"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Pression eau"
                                city="Naizin"
                                value="2,12"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Ph"
                                city="Naizin"
                                value="7,2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Ca"
                                city="Orgeval"
                                value="132,1"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Température"
                                city="Naizin"
                                value="22"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <SimpleCard
                                parameter="Li"
                                city="Naizin"
                                value="2,2"
                            />
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                 <Chart />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Discussion />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} >
               <h1 style={{color: '#2196f3'}}>Sorry this pagewas not developed yet</h1>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <h1 style={{color: '#2196f3'}}>Sorry this pagewas not developed yet</h1>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <h1 style={{color: '#2196f3'}}>Sorry this pagewas not developed yet</h1>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <h1 style={{color: '#2196f3'}}>Sorry this pagewas not developed yet</h1>
            </TabPanel>
            <TabPanel value={value} index={5}>
            <h1 style={{color: '#2196f3'}}>Sorry this pagewas not developed yet</h1>
            </TabPanel>
        </div>
    );
}
