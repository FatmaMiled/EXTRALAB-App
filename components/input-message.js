import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import TextField from '@material-ui/core/TextField';
import av2 from '../images/av2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
        marginBottom: '8px',
        borderRadius: '20px',
    },
    inline: {
        display: 'inline',
        color: 'black',
    },
}));

export default function InputMessage() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src= {av2}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            autoFocus={true}
                            id="standard-basic"
                            label="Standard"
                            style={{ backgroundColor: 'white', width: '100%' }}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
