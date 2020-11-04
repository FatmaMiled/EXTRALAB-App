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
import avatar from '../images/unnamed.png';

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

export default function Comment() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src= {avatar}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <div>
                            <Typography
                                component="span"
                                variant="h6"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Paul Floury
                            </Typography>
                            <br />
                            {
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ullamco laboris nisi ut aliquip ex ea non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            }
                            <br />
                            <Button variant="contained" color="primary">
                                Signalement
                            </Button>
                            <Button
                                style={{ marginLeft: '5px' }}
                                variant="contained"
                                color="primary"
                            >
                                Pompe
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '10px' }}>
                        <Button style={{ marginLeft: '5px', color: 'black' }}>
                            <ThumbUpAltIcon />
                            J'aime
                        </Button>
                        <Button style={{ marginLeft: '5px', color: 'black' }}>
                            <CommentIcon /> Comment
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
