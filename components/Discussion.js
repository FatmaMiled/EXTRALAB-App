import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InputMessage from './input-message';
import Comment from './comments';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        minWidth: 220,
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
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Discussion(props) {
    const hidden = useSelector((state) => state.hidden);
    const point = useSelector((state) => state.point);

    return (
        <>
            {point && (
                <>
                <h1 style= {{color: '#ff9800'}}>Qoi de neuf à Orgeval  ?</h1>
                <h1 style={{  color: 'white' }}>
                    {point.name} | ppm : {point.ppm}
                </h1>
                </>
            )}
            {point && (
                <>
                    <InputMessage />
                    <Comment />
                    <Comment />
                </>
            )}
        </>
    );
}
