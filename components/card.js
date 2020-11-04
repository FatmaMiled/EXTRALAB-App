import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { useDispatch } from 'react-redux';
import { chosenPoint, updateHidden } from '../redux/actions';

const useStyles = makeStyles({
    root: {
        minWidth: 150,
        margin: '0px',
        backgroundColor: 'white',
        color: 'black',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 10,
    },
    pos: {
        marginBottom: 0,
    },
});

const SimpleCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card
            className={classes.root}
            onClick={() => {
                dispatch(updateHidden(false));
                console.log('hidden false');
            }}
        >
            <CardContent>
                <p style={{ margin: 0, textAlign: 'right' }}>
                    EN DIRECT <FiberManualRecordIcon style={{ color: 'red' }} />
                </p>
                <Typography variant="h6" component="h2">
                    {props.value}
                </Typography>
                <Typography variant="p" component="p">
                    {props.parameter} | {props.city}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCard;
